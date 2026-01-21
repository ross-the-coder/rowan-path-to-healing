import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Calendar } from "lucide-react";
import { StudentAdvisoryApplicationForm } from "@/components/StudentAdvisoryApplicationForm";
import { Reveal } from "@/components/Reveal";
import studentAdvisoryBoardImage from "@/assets/student-advisory-board.jpg";

const StudentAdvisoryBoard = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl font-seasons font-normal mb-6">
                Student Advisory Board
              </h1>
              <p className="text-xl font-roboto font-light text-white/90 mb-8">
                Amplify student voices and help end sexual violence in our schools and communities.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <img
              src={studentAdvisoryBoardImage}
              alt="Students participating in the Rowan Center Student Advisory Board"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-seasons font-normal mb-4 text-center">
                  About the Program
                </h2>
                <p className="font-roboto text-lg leading-relaxed mb-4">
                  The Student Advisory Board provides insight, information, and perspective about sexual
                  violence at high schools and on college campuses. Members help The Rowan Center shape
                  prevention messaging that resonates with youth and young adults.
                </p>
                <p className="font-roboto text-lg leading-relaxed">
                  Students meet once a month and collaborate to raise awareness about The Rowan Center
                  and sexual assault prevention at their schools and in their communities.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons text-xl mb-2">Monthly Meetings</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Connect regularly with peers and Rowan Center staff.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons text-xl mb-2">Student-Led</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Share lived experience and help guide prevention efforts.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons text-xl mb-2">Community Impact</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Create awareness projects that support safer schools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-seasons font-normal mb-4">
              Join the Student Advisory Board
            </h2>
            <p className="font-roboto text-lg text-muted-foreground mb-4">
              Assist The Rowan Center in its mission to eliminate sexual violence.
            </p>
            <p className="font-roboto">
              Complete the application below to express your interest. We will follow up with next steps.
            </p>
          </div>

          <StudentAdvisoryApplicationForm />
        </section>
      </div>
    </Layout>
  );
};

export default StudentAdvisoryBoard;
