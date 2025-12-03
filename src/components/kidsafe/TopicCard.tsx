import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Topic } from "@/data/kidSafeData";
import { ConversationStarter } from "./ConversationStarter";
import { ActivityCard } from "./ActivityCard";
import { GlossaryHighlighter } from "./GlossaryHighlighter";

interface TopicCardProps {
  topic: Topic;
  onComplete?: (topicId: string) => void;
  isCompleted?: boolean;
}

export const TopicCard = ({ topic, onComplete, isCompleted }: TopicCardProps) => {
  const [checked, setChecked] = useState(isCompleted || false);
  
  // Get the icon component dynamically
  const IconComponent = LucideIcons[topic.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;

  const handleCheck = () => {
    const newState = !checked;
    setChecked(newState);
    if (onComplete) onComplete(topic.id);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className={`${topic.color} border-b`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {IconComponent && <IconComponent className="h-8 w-8" />}
            <div>
              <CardTitle className="text-xl">
                <GlossaryHighlighter text={topic.title} />
              </CardTitle>
              <CardDescription className="text-sm mt-1 text-inherit opacity-80">
                <GlossaryHighlighter text={topic.summary} />
              </CardDescription>
            </div>
          </div>
          <button
            onClick={handleCheck}
            className="flex-shrink-0 transition-transform hover:scale-110"
            aria-label={checked ? "Mark as incomplete" : "Mark as complete"}
          >
            <CheckCircle2 
              className={`h-6 w-6 ${checked ? 'text-green-600 fill-green-600' : 'text-gray-300'}`}
            />
          </button>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Full Content - show PDF content directly */}
        {'fullContent' in topic && (topic as any).fullContent ? (
          <div className="space-y-3">
            {(topic as any).fullContent.map((paragraph: string, idx: number) => (
              <p key={idx} className="text-sm leading-relaxed text-foreground">
                <GlossaryHighlighter text={paragraph} />
              </p>
            ))}
          </div>
        ) : (
          /* Fallback to keyPoints if no fullContent */
          <div>
            <ul className="space-y-2">
              {topic.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <GlossaryHighlighter text={point} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Conversation Starters & Activities in Accordion */}
        <Accordion type="multiple" className="w-full">
          {topic.conversationStarters && topic.conversationStarters.length > 0 && (
            <AccordionItem value="conversations">
              <AccordionTrigger className="text-sm font-semibold">
                💬 Conversation Starters ({topic.conversationStarters.length})
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                {topic.conversationStarters.map((convo, idx) => (
                  <ConversationStarter key={idx} conversation={convo} />
                ))}
              </AccordionContent>
            </AccordionItem>
          )}

          {topic.activities && topic.activities.length > 0 && (
            <AccordionItem value="activities">
              <AccordionTrigger className="text-sm font-semibold">
                🎯 Practice Activities ({topic.activities.length})
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-4">
                {topic.activities.map((activity, idx) => (
                  <ActivityCard key={idx} activity={activity} />
                ))}
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </CardContent>
    </Card>
  );
};