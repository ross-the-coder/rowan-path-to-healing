import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { lazy, Suspense } from "react";

// Lazy load all page components
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const CrisisSupport = lazy(() => import("./pages/CrisisSupport"));
const PreventionEducation = lazy(() => import("./pages/PreventionEducation"));
const CrisisServices = lazy(() => import("./pages/CrisisServices"));
const VictimAdvocacy = lazy(() => import("./pages/VictimAdvocacy"));
const TraumaRecovery = lazy(() => import("./pages/TraumaRecovery"));
const CommunityResources = lazy(() => import("./pages/CommunityResources"));
const Impact = lazy(() => import("./pages/Impact"));
const Donate = lazy(() => import("./pages/Donate"));
const Events = lazy(() => import("./pages/Events"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Blog = lazy(() => import("./pages/Blog"));
const Media = lazy(() => import("./pages/Media"));
const BoardOfDirectors = lazy(() => import("./pages/BoardOfDirectors"));
const Financials = lazy(() => import("./pages/Financials"));
const Careers = lazy(() => import("./pages/Careers"));
const KidSafeHQ = lazy(() => import("./pages/KidSafeHQ"));
const KidSafeElementary = lazy(() => import("./pages/KidSafeElementary"));
const KidSafeMiddle = lazy(() => import("./pages/KidSafeMiddle"));
const KidSafeHigh = lazy(() => import("./pages/KidSafeHigh"));
const KidSafeResources = lazy(() => import("./pages/KidSafeResources"));
const KidSafeNews = lazy(() => import("./pages/KidSafeNews"));
const News = lazy(() => import("./pages/News"));
const CTLawsReporting = lazy(() => import("./pages/CTLawsReporting"));
const Reminders = lazy(() => import("./pages/Reminders"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const StaffLogin = lazy(() => import("./pages/StaffLogin"));
const Admin = lazy(() => import("./pages/Admin"));
const Staff = lazy(() => import("./pages/Staff"));

const queryClient = new QueryClient();

const App = () => {
  console.log("App component is rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
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
                <Route path="/staff-login" element={<StaffLogin />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;