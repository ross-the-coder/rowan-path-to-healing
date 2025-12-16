import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CrisisSupport from "./pages/CrisisSupport";
import PreventionEducation from "./pages/PreventionEducation";
import CrisisServices from "./pages/CrisisServices";
import VictimAdvocacy from "./pages/VictimAdvocacy";
import TraumaRecovery from "./pages/TraumaRecovery";
import Resources from "./pages/Resources";
import CommunityResources from "./pages/CommunityResources";
import Impact from "./pages/Impact";
import Donate from "./pages/Donate";
import Events from "./pages/Events";
import Volunteer from "./pages/Volunteer";
import Blog from "./pages/Blog";
import Media from "./pages/Media";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import Staff from "./pages/Staff";
import Financials from "./pages/Financials";
import Careers from "./pages/Careers";
import KidSafeHQ from "./pages/KidSafeHQ";
import KidSafeElementary from "./pages/KidSafeElementary";
import KidSafeMiddle from "./pages/KidSafeMiddle";
import KidSafeHigh from "./pages/KidSafeHigh";
import KidSafeResources from "./pages/KidSafeResources";
import KidSafeNews from "./pages/KidSafeNews";
import News from "./pages/News";
import CTLawsReporting from "./pages/CTLawsReporting";
import Reminders from "./pages/Reminders";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component is rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/crisis-support" element={<CrisisSupport />} />
            <Route path="/prevention-education" element={<PreventionEducation />} />
            <Route path="/crisis-services" element={<CrisisServices />} />
            <Route path="/victim-advocacy" element={<VictimAdvocacy />} />
            <Route path="/trauma-recovery" element={<TraumaRecovery />} />
            <Route path="/resources" element={<CommunityResources />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/events" element={<Events />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/media" element={<Media />} />
            <Route path="/board-of-directors" element={<BoardOfDirectors />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/careers" element={<Careers />} />
          <Route path="/kidsafehq" element={<KidSafeHQ />} />
          <Route path="/kidsafehq/elementary" element={<KidSafeElementary />} />
          <Route path="/kidsafehq/middle" element={<KidSafeMiddle />} />
          <Route path="/kidsafehq/high" element={<KidSafeHigh />} />
          <Route path="/kidsafehq/resources" element={<KidSafeResources />} />
          <Route path="/kidsafehq/news" element={<KidSafeNews />} />
            <Route path="/news" element={<News />} />
            <Route path="/ct-laws-reporting" element={<CTLawsReporting />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;