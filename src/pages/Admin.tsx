import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { FileText, LogOut, Download, Calendar, Users, Mail, Phone, ClipboardList } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BaseSubmission {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

const Admin = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [crisisCounseling, setCrisisCounseling] = useState<BaseSubmission[]>([]);
  const [traumaRecovery, setTraumaRecovery] = useState<BaseSubmission[]>([]);
  const [victimAdvocacy, setVictimAdvocacy] = useState<BaseSubmission[]>([]);
  const [volunteerApps, setVolunteerApps] = useState<BaseSubmission[]>([]);
  const [studentAdvisory, setStudentAdvisory] = useState<BaseSubmission[]>([]);
  const [preventionEducation, setPreventionEducation] = useState<BaseSubmission[]>([]);
  const [newsletterSubs, setNewsletterSubs] = useState<BaseSubmission[]>([]);

  useEffect(() => {
    if (!user) {
      navigate("/staff-login");
    } else {
      fetchAllSubmissions();
    }
  }, [user, navigate]);

  const fetchAllSubmissions = async () => {
    try {
      const [
        crisisRes,
        traumaRes,
        victimRes,
        volunteerRes,
        studentRes,
        preventionRes,
        newsletterRes,
      ] = await Promise.all([
        supabase.from("crisis_counseling_intake").select("id, created_at, first_name, last_name, email, phone").order("created_at", { ascending: false }),
        supabase.from("trauma_recovery_intake").select("id, created_at, first_name, last_name, email, phone").order("created_at", { ascending: false }),
        supabase.from("victim_advocacy_intake").select("id, created_at, first_name, last_name, email, phone").order("created_at", { ascending: false }),
        supabase.from("volunteer_applications").select("id, created_at, first_name, last_name, email, phone").order("created_at", { ascending: false }),
        supabase.from("student_advisory_applications").select("id, created_at, first_name, last_name, email, phone").order("created_at", { ascending: false }),
        supabase.from("prevention_education_contact").select("id, created_at, first_name, last_name, email, phone").order("created_at", { ascending: false }),
        supabase.from("newsletter_subscriptions").select("id, subscribed_at, first_name, last_name, email").order("subscribed_at", { ascending: false }),
      ]);

      setCrisisCounseling(crisisRes.data || []);
      setTraumaRecovery(traumaRes.data || []);
      setVictimAdvocacy(victimRes.data || []);
      setVolunteerApps(volunteerRes.data || []);
      setStudentAdvisory(studentRes.data || []);
      setPreventionEducation(preventionRes.data || []);
      setNewsletterSubs((newsletterRes.data || []).map(sub => ({
        ...sub,
        created_at: sub.subscribed_at,
        phone: '',
      })));
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/staff-login");
  };

  const exportToCSV = (data: BaseSubmission[], filename: string) => {
    const headers = ["Date", "First Name", "Last Name", "Email", "Phone"];
    const rows = data.map((sub) => [
      new Date(sub.created_at).toLocaleString(),
      sub.first_name,
      sub.last_name,
      sub.email,
      sub.phone,
    ]);

    const csv = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell || ''}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}-${new Date().toISOString()}.csv`;
    a.click();
  };

  const SubmissionTable = ({ data, title }: { data: BaseSubmission[]; title: string }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            {title}
          </CardTitle>
          <CardDescription>{data.length} submissions</CardDescription>
        </div>
        <Button 
          onClick={() => exportToCSV(data, title.toLowerCase().replace(/\s+/g, '-'))} 
          variant="outline"
          size="sm"
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">No submissions yet</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        {submission.first_name} {submission.last_name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <a href={`mailto:${submission.email}`} className="hover:underline">
                            {submission.email}
                          </a>
                        </div>
                        {submission.phone && (
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-3 w-3 text-muted-foreground" />
                            <a href={`tel:${submission.phone}`} className="hover:underline">
                              {submission.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-96 mt-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Logged in as: {user?.email}
            </p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="crisis" className="space-y-6">
          <TabsList className="flex-wrap h-auto">
            <TabsTrigger value="crisis">
              Crisis Counseling <Badge variant="secondary" className="ml-2">{crisisCounseling.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="trauma">
              Trauma Recovery <Badge variant="secondary" className="ml-2">{traumaRecovery.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="victim">
              Victim Advocacy <Badge variant="secondary" className="ml-2">{victimAdvocacy.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="volunteer">
              Volunteer Apps <Badge variant="secondary" className="ml-2">{volunteerApps.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="student">
              Student Advisory <Badge variant="secondary" className="ml-2">{studentAdvisory.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="prevention">
              Prevention Ed <Badge variant="secondary" className="ml-2">{preventionEducation.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="newsletter">
              Newsletter <Badge variant="secondary" className="ml-2">{newsletterSubs.length}</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="crisis">
            <SubmissionTable data={crisisCounseling} title="Crisis Counseling Intake" />
          </TabsContent>
          <TabsContent value="trauma">
            <SubmissionTable data={traumaRecovery} title="Trauma Recovery Intake" />
          </TabsContent>
          <TabsContent value="victim">
            <SubmissionTable data={victimAdvocacy} title="Victim Advocacy Intake" />
          </TabsContent>
          <TabsContent value="volunteer">
            <SubmissionTable data={volunteerApps} title="Volunteer Applications" />
          </TabsContent>
          <TabsContent value="student">
            <SubmissionTable data={studentAdvisory} title="Student Advisory Applications" />
          </TabsContent>
          <TabsContent value="prevention">
            <SubmissionTable data={preventionEducation} title="Prevention Education Contact" />
          </TabsContent>
          <TabsContent value="newsletter">
            <SubmissionTable data={newsletterSubs} title="Newsletter Subscriptions" />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;
