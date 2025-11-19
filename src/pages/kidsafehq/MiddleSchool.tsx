import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

const MiddleSchool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/kidsafehq">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to KidSafeHQ
              </Button>
            </Link>
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Middle School</h1>
              <p className="text-xl text-muted-foreground">
                Age-appropriate content for 6th-8th grade students
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <Construction className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <CardTitle className="text-2xl">Content Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're currently developing comprehensive resources for middle school students. 
                Check back soon for interactive guides and educational materials.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MiddleSchool;
