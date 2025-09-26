import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VictimAdvocacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-seasons font-normal text-center mb-8">Victim Advocacy</h1>
        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This page is under development.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default VictimAdvocacy;