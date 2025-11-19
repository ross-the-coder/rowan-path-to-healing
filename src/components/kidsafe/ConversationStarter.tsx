import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { ConversationExample } from "@/data/kidSafeData";

interface ConversationStarterProps {
  conversation: ConversationExample;
}

export const ConversationStarter = ({ conversation }: ConversationStarterProps) => {
  return (
    <Card className="p-4 bg-muted/50 border-l-4 border-l-primary">
      <div className="flex items-start gap-3">
        <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="flex-1 space-y-3">
          <p className="font-medium text-sm">{conversation.scenario}</p>
          <div className="space-y-2">
            {conversation.dialogues.map((dialogue, idx) => (
              <div 
                key={idx} 
                className={`text-sm p-2 rounded ${
                  dialogue.speaker === "Parent" 
                    ? "bg-blue-50 border-l-2 border-l-blue-400" 
                    : "bg-green-50 border-l-2 border-l-green-400"
                }`}
              >
                <span className="font-semibold">{dialogue.speaker}:</span>{" "}
                <span className="italic">&ldquo;{dialogue.text}&rdquo;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};