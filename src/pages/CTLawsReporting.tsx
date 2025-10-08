import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Phone, FileText, AlertCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CTLawsReporting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-[hsl(var(--blue-accent))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">
              Connecticut Laws & Reporting
            </h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8">
              Understanding Connecticut laws, definitions, and reporting requirements for sexual violence
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Mandated Reporting */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Mandated Reporting</h2>
            
            <Card className="mb-8">
              <CardHeader>
                <Phone className="h-8 w-8 text-secondary mb-4" />
                <CardTitle className="font-seasons text-2xl">Who Must Report?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto mb-6">
                  Connecticut law requires certain professionals to report suspected child abuse or neglect, including sexual abuse. Mandated reporters include:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 font-roboto">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Teachers and school personnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Social workers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Physicians and nurses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Mental health professionals</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 font-roboto">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Law enforcement officers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Clergy members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Coaches and youth program staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Family child care providers</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <h3 className="font-seasons text-lg mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-accent" />
                    When to Report
                  </h3>
                  <p className="font-roboto text-sm">
                    Reports must be made when there is <strong>reasonable cause to suspect or believe</strong> that a child has been abused or neglected, or is in danger of being abused or neglected. Reports must be made within 12 hours.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-seasons text-xl">How to Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto mb-4">
                  Reports of suspected child abuse or neglect should be made to:
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-seasons text-lg mb-2">DCF Careline</h3>
                    <p className="font-roboto mb-2">Connecticut Department of Children and Families</p>
                    <p className="font-roboto font-bold text-xl">1-800-842-2288</p>
                    <p className="font-roboto text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-seasons text-lg mb-2">Local Police</h3>
                    <p className="font-roboto">Contact your local law enforcement agency for immediate concerns</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Consent Laws */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Consent Laws</h2>
            
            <Card className="mb-8">
              <CardHeader>
                <FileText className="h-8 w-8 text-secondary mb-4" />
                <CardTitle className="font-seasons text-2xl">Age of Consent in Connecticut</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-seasons text-lg mb-3">Key Points About Consent</h3>
                    <ul className="space-y-3 font-roboto">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span>The age of consent in Connecticut is <strong>16 years old</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span>A person under 16 cannot legally consent to sexual activity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span>There are additional protections for youth ages 16-17 when there is a position of authority (teacher, coach, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Consent cannot be given if a person is incapacitated due to drugs, alcohol, or mental/physical disability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Consent can be withdrawn at any time</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                    <h3 className="font-seasons text-lg mb-2">What is Consent?</h3>
                    <p className="font-roboto text-sm">
                      Consent is a clear, voluntary, and ongoing agreement to engage in sexual activity. It must be:
                    </p>
                    <ul className="mt-2 space-y-1 font-roboto text-sm">
                      <li>• <strong>Freely given</strong> - without pressure, force, or coercion</li>
                      <li>• <strong>Reversible</strong> - can be withdrawn at any time</li>
                      <li>• <strong>Informed</strong> - with full knowledge of what you're agreeing to</li>
                      <li>• <strong>Enthusiastic</strong> - active participation, not passive acceptance</li>
                      <li>• <strong>Specific</strong> - agreeing to one activity doesn't mean agreeing to all</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CT Definitions */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-seasons font-normal text-center mb-12">Connecticut Legal Definitions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="sexual-assault">
                <AccordionTrigger className="font-seasons text-lg">
                  Sexual Assault (CGS §53a-70)
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  <p className="mb-3">
                    Sexual assault in the first degree occurs when a person compels another person to engage in sexual intercourse by the use of force or the threat of force, or when the victim is physically helpless, mentally defective, or under 13 years old.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This is a Class A or B felony depending on circumstances, carrying significant prison sentences.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="statutory-rape">
                <AccordionTrigger className="font-seasons text-lg">
                  Statutory Rape & Related Offenses
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  <p className="mb-3">
                    Connecticut law prohibits sexual activity with minors under specific circumstances:
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li>• Sexual intercourse with a person under 16 (with some close-in-age exceptions)</li>
                    <li>• Sexual contact with a person under 15 by someone more than 3 years older</li>
                    <li>• Sexual activity between a minor and a person in a position of authority (teacher, coach, guardian)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Penalties vary based on the age difference and nature of the relationship.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sexual-harassment">
                <AccordionTrigger className="font-seasons text-lg">
                  Sexual Harassment
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  <p className="mb-3">
                    Sexual harassment includes unwelcome sexual advances, requests for sexual favors, or other verbal, non-verbal, or physical conduct of a sexual nature when:
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li>• Submission is made a condition of employment or education</li>
                    <li>• It creates an intimidating, hostile, or offensive environment</li>
                    <li>• It interferes with work or educational performance</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Protected under Title IX (education) and Title VII (employment) at the federal level, and Connecticut state law.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="stalking">
                <AccordionTrigger className="font-seasons text-lg">
                  Stalking (CGS §53a-181c)
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  <p className="mb-3">
                    Stalking occurs when a person knowingly engages in a course of conduct directed at a specific person that would cause a reasonable person to fear for their safety or the safety of others, or suffer emotional distress.
                  </p>
                  <p className="mb-3">
                    This can include following, surveilling, communicating with (including online), or appearing at a person's home or workplace.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Stalking is a Class A misdemeanor for first offense, with increased penalties for repeat offenses.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="revenge-porn">
                <AccordionTrigger className="font-seasons text-lg">
                  Revenge Porn / Intimate Image Sharing (CGS §53a-189c)
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  <p className="mb-3">
                    Connecticut law prohibits the non-consensual sharing of intimate images. It is illegal to knowingly disseminate an intimate image of another person without consent when:
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li>• The person in the image has a reasonable expectation of privacy</li>
                    <li>• The dissemination causes harm to that person</li>
                    <li>• The person sharing knew or should have known the image was shared without consent</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    This is a Class A misdemeanor, or a Class D felony for subsequent offenses.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="child-abuse">
                <AccordionTrigger className="font-seasons text-lg">
                  Child Sexual Abuse
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-base">
                  <p className="mb-3">
                    Connecticut defines child sexual abuse broadly to include any sexual contact or conduct with a child, including:
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li>• Any sexual activity with a child under 13</li>
                    <li>• Sexual contact with a child by a caretaker, family member, or person in authority</li>
                    <li>• Exploitation through pornography or prostitution</li>
                    <li>• Grooming behaviors intended to establish a relationship for sexual purposes</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Connecticut law provides strong protections for children, with severe penalties for offenders.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Resources */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[hsl(var(--blue-accent))]/10 border-[hsl(var(--blue-accent))]/20">
              <CardHeader>
                <AlertCircle className="h-10 w-10 text-[hsl(var(--blue-accent))] mx-auto mb-4" />
                <CardTitle className="text-2xl font-seasons text-center">Need Legal Guidance?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-roboto mb-6">
                  The information on this page is for educational purposes only and does not constitute legal advice. For specific legal guidance, please consult with an attorney or contact our advocacy team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[hsl(var(--blue-accent))] hover:bg-[hsl(var(--blue-accent))]/90">
                    Contact Our Advocates
                  </Button>
                  <Button size="lg" variant="outline" className="border-[hsl(var(--blue-accent))] text-[hsl(var(--blue-accent))] hover:bg-[hsl(var(--blue-accent))]/10">
                    24/7 Crisis Line: (203) 348-9346
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CTLawsReporting;
