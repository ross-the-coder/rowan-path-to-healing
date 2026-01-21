import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { TraumaRecoveryIntakeForm } from "@/components/TraumaRecoveryIntakeForm";
import { Link } from "react-router-dom";

const TraumaRecoveryIntake = () => {
  return (
    <Layout>
      <SEO
        title="Trauma Recovery Intake Form"
        description="Complete the Trauma Recovery Practice intake form to request an initial consultation."
      />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center sm:justify-start mb-6">
              <Button asChild variant="ghost">
                <Link to="/trauma-recovery">Back to Trauma Recovery</Link>
              </Button>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-seasons text-foreground mb-3">
                Trauma Recovery Practice Intake
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This form helps us understand your needs so we can match you with the right clinician and follow up
                about next steps.
              </p>
            </div>
            <TraumaRecoveryIntakeForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TraumaRecoveryIntake;
