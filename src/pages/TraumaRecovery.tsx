import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, Users, Clock, Shield, CheckCircle } from "lucide-react";
import { TraumaRecoveryIntakeForm } from "@/components/TraumaRecoveryIntakeForm";

const TraumaRecovery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-[hsl(var(--accent))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-seasons font-normal mb-6">The Trauma Recovery Clinic</h1>
            <p className="text-2xl font-roboto font-light text-white/90 mb-4">
              All survivors of trauma deserve hope and healing.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="container mx-auto px-4">

          {/* About TRC Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                The Trauma Recovery Clinic (TRC) at The Rowan Center offers long-term, trauma-informed 
                clinical therapy to help survivors of trauma heal.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                If you or someone you know has experienced trauma of any kind, our team of therapists 
                is here to help. Connect with the Trauma Recovery Clinic today to learn more about the 
                services we offer, including talk therapy, EMDR, and other clinical therapy modalities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-background rounded-xl p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-accent" />
                    <h3 className="font-semibold text-foreground">Insurance</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We are currently serving trauma victims and survivors on the HUSKY health insurance plan.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-accent" />
                    <h3 className="font-semibold text-foreground">Eligibility</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Clients must be at least 18 years old.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-accent/20">
                <div className="flex items-center gap-3">
                  <Stethoscope className="h-6 w-6 text-accent" />
                  <p className="text-muted-foreground">
                    The TRC is fully licensed by the CT Department of Public Health.
                  </p>
                </div>
              </div>
            </div>
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
          <div className="mb-12">
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
            
            <TraumaRecoveryIntakeForm />
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