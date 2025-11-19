import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ResourceLinksProps {
  resources: { category: string; links: { title: string; url?: string }[] }[];
}

export const ResourceLinks = ({ resources }: ResourceLinksProps) => {
  return (
    <Card className="mt-8">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>Additional Resources</CardTitle>
            <CardDescription>External articles, guides, and activities for deeper learning</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="multiple" className="w-full">
          {resources.map((resourceGroup, idx) => (
            <AccordionItem key={idx} value={`resource-${idx}`}>
              <AccordionTrigger className="text-sm font-semibold">
                📚 {resourceGroup.category}
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-2">
                {resourceGroup.links.map((link, linkIdx) => (
                  <div 
                    key={linkIdx}
                    className="flex items-start gap-2 p-2 rounded hover:bg-muted/50 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{link.title}</span>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};