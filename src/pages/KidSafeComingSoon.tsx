import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import kidsafeLogo from "@/assets/kidsafe-hq-logo.png";

const KidSafeComingSoon = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg">
              <img src={kidsafeLogo} alt="KidSafeHQ Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-5xl font-seasons font-normal text-foreground mb-4">
              KidSafeHQ Coming Soon
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're working hard to bring you comprehensive child safety education resources.
              KidSafeHQ will launch soon with age-appropriate content for elementary, middle,
              and high school students.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Bell className="h-5 w-5" />
                Get Notified When We Launch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Sign up for our newsletter to be the first to know when KidSafeHQ goes live.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>
                  <Mail className="h-4 w-4 mr-2" />
                  Notify Me
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">What to Expect:</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Age-Appropriate Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored resources for elementary, middle, and high school students
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Interactive Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Engaging activities and resources for students, parents, and educators
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Developed by professionals with decades of experience in child safety
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-muted-foreground mb-4">
              In the meantime, explore our other resources:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/prevention-education">Prevention Education</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/resources">Community Resources</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KidSafeComingSoon;
