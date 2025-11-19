import { Card } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { Activity } from "@/data/kidSafeData";

interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard = ({ activity }: ActivityCardProps) => {
  const IconComponent = LucideIcons[activity.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;

  return (
    <Card className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
      <div className="flex items-start gap-3">
        {IconComponent && <IconComponent className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />}
        <div>
          <h5 className="font-semibold text-sm mb-1">{activity.title}</h5>
          <p className="text-sm text-muted-foreground">{activity.description}</p>
        </div>
      </div>
    </Card>
  );
};