import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Shield } from "lucide-react";

const Prevent = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Prevention Programs</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Education and community programs designed to prevent trauma and build safer communities 
              where children can grow up protected and informed.
            </p>
          </div>

          {/* Prevention Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Prevention Education</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Comprehensive educational programs for schools, communities, and organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <span>Age-appropriate safety education for children and teens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <span>Professional training for educators and caregivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span>Community awareness workshops</span>
                  </li>
                </ul>
                <Button>Request Training</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">KidSafeHQ</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Specialized child safety training and resources for parents and professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <span>Parent education workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <span>Online safety resources and guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                    <span>Professional certification programs</span>
                  </li>
                </ul>
                <Button variant="outline">Learn About KidSafeHQ</Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-primary-lighter rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Help Build Safer Communities
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Partner with us to bring prevention education to your school, organization, or community. 
              Together, we can create environments where children are safe and informed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule a Presentation</Button>
              <Button variant="outline" size="lg">Download Resources</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Prevent;