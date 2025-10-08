import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, Users, Clock, Shield, CheckCircle } from "lucide-react";

const TraumaRecovery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-[hsl(var(--accent))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">Trauma Recovery Clinic</h1>
            <p className="text-xl font-roboto font-light text-white/90 mb-8 max-w-3xl mx-auto">
              Professional, trauma-informed mental health care designed to support adult and youth survivors 
              on their healing journey with accessible, compassionate treatment.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="container mx-auto px-4">

          {/* Services Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Stethoscope className="h-8 w-8 text-accent" />
                  <CardTitle className="text-2xl">Trauma-Informed Therapy</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Evidence-based treatment approaches tailored to each survivor's unique needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <span>Individual therapy sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <span>EMDR and trauma-focused CBT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <span>Youth and adolescent specialization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-8 w-8 text-accent" />
                  <CardTitle className="text-2xl">Accessible Mental Health Care</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Making quality mental health care available and affordable for all survivors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <span>Sliding scale fees available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <span>Insurance accepted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Treatment Approaches */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Treatment Approaches</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">EMDR Therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Eye Movement Desensitization and Reprocessing helps process traumatic memories and reduce their emotional impact.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Trauma-Focused CBT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cognitive Behavioral Therapy specifically adapted for trauma survivors to process experiences and develop coping skills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Somatic Approaches</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Body-based therapies that help address the physical impacts of trauma and support healing through the body-mind connection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Intake Process */}
          <div className="bg-accent-light/10 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-foreground mb-6">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Complete Intake Form</h3>
                <p className="text-sm text-muted-foreground">Fill out our secure intake form to help us understand your needs</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Initial Consultation</h3>
                <p className="text-sm text-muted-foreground">Meet with our intake coordinator to discuss your goals and preferences</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Begin Treatment</h3>
                <p className="text-sm text-muted-foreground">Start your healing journey with a therapist matched to your needs</p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Complete Trauma Recovery Intake Form
              </Button>
            </div>
          </div>

          {/* Support Information */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">You Don't Have to Heal Alone</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Healing from trauma takes time, and everyone's journey is different. Our experienced, 
              trauma-informed therapists are here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">Learn More About Our Therapists</Button>
              <Button variant="outline" size="lg">Insurance & Payment Options</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TraumaRecovery;