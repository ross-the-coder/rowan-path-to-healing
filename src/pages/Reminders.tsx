import { ReminderSetup } from "@/components/ReminderSetup";

const Reminders = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto">
        <ReminderSetup />
      </div>
    </div>
  );
};

export default Reminders;