import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, BookOpen, Heart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Volunteer = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Volunteer as a Crisis Advocate
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              Join our team of dedicated volunteers and make a real difference in the lives of survivors.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <p className="font-roboto text-lg leading-relaxed mb-4">
                  All direct service volunteers (hotline and community outreach) must successfully complete our <span className="font-medium">40-hour Certification Training Program</span>. Ages 18 and over.
                </p>
                <p className="font-roboto text-lg leading-relaxed">
                  This certification training consists of individual modules on the appropriate topics conducted by staff members of The Rowan Center who are experts in their individual areas. Sessions contain readings, videos, guest speakers, site visits to both a hospital emergency room and local police station, role plays, group and individual exercises.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons text-xl mb-2">40 Hours</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Comprehensive certification training program
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons text-xl mb-2">Expert-Led</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Training by experienced Rowan Center staff
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-seasons text-xl mb-2">State Certified</h3>
                  <p className="font-roboto text-sm text-muted-foreground">
                    Become a certified Sexual Assault Crisis Advocate
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-8">What You'll Learn</h2>
            <Card>
              <CardContent className="p-8">
                <p className="font-roboto text-lg mb-6">
                  Upon completion of the course, you will have a better understanding on the topic of sexual violence and its effects on survivors and their family and friends. This course will prepare you for your role as a volunteer advocate with The Rowan Center and on our 24-hour crisis hotline.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="font-roboto">Sexual violence 101</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="font-roboto">Counseling techniques</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="font-roboto">Medical accompaniments</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="font-roboto">Mandatory reporting procedures</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="font-roboto">Crisis intervention</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="font-roboto">Medical/police accompaniments</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-seasons text-lg">
                  What kind of training/degree/experience do I need to be a hotline volunteer?
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  We provide all of the training you will need to help victims of sexual violence and once you complete the 40 hour training course, you will be a state-certified Sexual Assault Crisis Advocate. No additional degree/training/experience is required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-seasons text-lg">
                  How much time do I have to commit to volunteering?
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  <p className="mb-4">
                    Initially, to become a Sexual Assault Crisis Advocate Volunteer, you must complete a 40-hour training course. The training typically runs for 3 weeks. Sessions are usually held Tuesday and Thursday evenings from 6:00-8:30pm and Saturdays from 9:00am-2:00pm.
                  </p>
                  <p className="mb-4">
                    If you are working on the hotline, we ask that you sign up for a minimum of four (4) shifts per month. To maintain certification, you must complete 6 additional hours of sexual violence training per year (July 1 – June 30).
                  </p>
                  <p>
                    To find out about our next training and tentative schedule, please contact Raquel Lopez, Crisis Advocate Programs Administrator, at <a href="mailto:rlopez@therowancenter.org" className="text-secondary hover:underline">rlopez@therowancenter.org</a>.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Student Advisory Board */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-seasons text-center">Join the Student Advisory Board</CardTitle>
                <CardDescription className="text-center text-base">
                  Assist The Rowan Center in its mission to eliminate sexual violence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-roboto mb-6">
                  The purpose of this advisory board is to provide insight, information, and perspective about sexual violence at high schools and on college campuses. You will meet once a month with students from high schools and, together, create ways to raise awareness about The Rowan Center and sexual assault prevention at your school.
                </p>
                
                <h3 className="font-seasons text-lg mb-4">Requirements</h3>
                <ul className="space-y-2 font-roboto mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Must be a sophomore, junior, or senior in high school</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Must attend high school within the eight towns we serve (Darien, Greenwich, New Canaan, Norwalk, Stamford, Weston, Westport, Wilton)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Must be able to attend monthly meetings (approximately 1 hour on one Sunday each month)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>To ensure the confidentiality and safety of all participants, we kindly request that you keep all discussions and personal details shared during our meetings private</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Apply Section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-seasons text-center">Apply to Volunteer</CardTitle>
                <CardDescription className="text-center">
                  For information regarding training sessions and to apply, please contact:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/10 p-8 rounded-lg text-center mb-6">
                  <p className="font-roboto text-lg mb-2">
                    <span className="font-medium">Raquel Lopez</span>
                  </p>
                  <p className="font-roboto text-muted-foreground mb-2">
                    Crisis Advocate Programs Administrator
                  </p>
                  <Button variant="outline" size="lg" asChild className="mt-4">
                    <a href="mailto:rlopez@therowancenter.org">
                      Contact Raquel Lopez
                    </a>
                  </Button>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg text-center">
                  <p className="font-roboto text-sm text-muted-foreground">
                    Application form will be available soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Volunteer;