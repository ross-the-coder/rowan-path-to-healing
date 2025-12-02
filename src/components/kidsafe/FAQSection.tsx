import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { GlossaryHighlighter } from "./GlossaryHighlighter";

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
}

export const FAQSection = ({ faqs }: FAQSectionProps) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <Card className="mt-8 border-primary/20">
      <CardHeader className="bg-primary/5">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          <CardTitle>Frequently Asked Questions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left">
                <GlossaryHighlighter text={faq.question} />
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <GlossaryHighlighter text={faq.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};