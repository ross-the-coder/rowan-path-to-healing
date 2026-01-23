import { lazy, Suspense, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Staff from "@/pages/Staff.tsx";
import CommunityResources from "@/pages/CommunityResources";
import KidSafeComingSoon from "@/pages/KidSafeComingSoon";
import KidSafeHQ from "@/pages/KidSafeHQ";
import KidSafeHQ from "@/pages/KidSafeHQ";

// Lazy load all page components
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const CrisisSupport = lazy(() => import("./pages/CrisisSupport"));
const CrisisServices = lazy(() => import("./pages/CrisisServices"));
const PreventionEducation = lazy(() => import("./pages/PreventionEducation"));
const VictimAdvocacy = lazy(() => import("./pages/VictimAdvocacy"));
const TraumaRecovery = lazy(() => import("./pages/TraumaRecovery"));
const TraumaRecoveryIntake = lazy(() => import("./pages/TraumaRecoveryIntake"));
const TraumaRecoveryMockup = lazy(() => import("./pages/TraumaRecoveryMockup"));
const Impact = lazy(() => import("./pages/Impact"));
const Donate = lazy(() => import("./pages/Donate"));
const DonateMockup = lazy(() => import("./pages/DonateMockup"));
const Events = lazy(() => import("./pages/Events"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const StudentAdvisoryBoard = lazy(() => import("./pages/StudentAdvisoryBoard"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Media = lazy(() => import("./pages/Media"));
const BoardOfDirectors = lazy(() => import("./pages/BoardOfDirectors"));
const Financials = lazy(() => import("./pages/Financials"));
const Careers = lazy(() => import("./pages/Careers"));
const News = lazy(() => import("./pages/News"));
const CTLawsReporting = lazy(() => import("./pages/CTLawsReporting"));
const Reminders = lazy(() => import("./pages/Reminders"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const StaffLogin = lazy(() => import("./pages/StaffLogin"));
const Admin = lazy(() => import("./pages/Admin"));
const TestForm = lazy(() => import("./pages/TestForm"));

const PerformanceDebugLogger = () => {
  const location = useLocation();
  const navStartRef = useRef<number | null>(null);

  useEffect(() => {
    navStartRef.current = performance.now();
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H4',location:'AppRoutes.tsx:PerformanceDebugLogger',message:'Route navigation start',data:{path:location.pathname,search:location.search,navStart:navStartRef.current},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    const logSettled = () => {
      const navStart = navStartRef.current;
      const elapsedMs = navStart ? Math.round(performance.now() - navStart) : null;
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H5',location:'AppRoutes.tsx:PerformanceDebugLogger',message:'Route navigation settled',data:{path:location.pathname,elapsedMs,readyState:document.readyState},timestamp:Date.now()})}).catch(()=>{});
      // #endregion agent log
    };

    requestAnimationFrame(() => requestAnimationFrame(logSettled));
  }, [location.pathname, location.search]);

  return null;
};

const RouteFallback = () => {
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H6',location:'AppRoutes.tsx:RouteFallback',message:'Suspense fallback mounted',data:{},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    // Set a timeout to detect stuck loading states (possible chunk failure)
    const timeoutId = setTimeout(() => {
      console.warn('Route loading timeout - possible chunk load failure');
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H7',location:'AppRoutes.tsx:RouteFallback',message:'Route loading timeout detected',data:{path:window.location.pathname},timestamp:Date.now()})}).catch(()=>{});
      // #endregion agent log
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H6',location:'AppRoutes.tsx:RouteFallback',message:'Suspense fallback unmounted',data:{},timestamp:Date.now()})}).catch(()=>{});
      // #endregion agent log
    };
  }, []);

  return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
};

const SeoDebugLogger = () => {
  const location = useLocation();

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content") || "";
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "";
    const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "";
    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";
    const h1Count = document.querySelectorAll("h1").length;

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H1',location:'AppRoutes.tsx:SeoDebugLogger',message:'Route SEO snapshot',data:{path:location.pathname,search:location.search,title:document.title,metaDescriptionLength:metaDescription.length,canonical,robots,ogTitlePresent:Boolean(ogTitle),ogDescriptionPresent:Boolean(ogDescription),ogImagePresent:Boolean(ogImage),h1Count},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H2',location:'AppRoutes.tsx:SeoDebugLogger',message:'Meta tag presence',data:{hasMetaDescription:Boolean(metaDescription),hasCanonical:Boolean(canonical),hasRobots:Boolean(robots),hasOgTitle:Boolean(ogTitle),hasOgDescription:Boolean(ogDescription),hasOgImage:Boolean(ogImage)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'seo-scan',hypothesisId:'H3',location:'AppRoutes.tsx:SeoDebugLogger',message:'Basic heading structure',data:{h1Count,h1TooMany:h1Count>1},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log
  }, [location.pathname, location.search]);

  return null;
};

export const AppRoutes = () => (
  <>
    <PerformanceDebugLogger />
    <SeoDebugLogger />
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/crisis-support" element={<CrisisSupport />} />
        <Route path="/crisis-services" element={<CrisisServices />} />
        <Route path="/prevention-education" element={<PreventionEducation />} />
        <Route path="/victim-advocacy" element={<VictimAdvocacy />} />
        <Route path="/trauma-recovery" element={<TraumaRecovery />} />
        <Route path="/trauma-recovery/intake" element={<TraumaRecoveryIntake />} />
        <Route path="/traumarecoverymockup" element={<TraumaRecoveryMockup />} />
        <Route path="/trauma-recovery-new" element={<TraumaRecoveryMockup />} />
        <Route path="/resources" element={<CommunityResources />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donatemockup" element={<DonateMockup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/student-advisory-board" element={<StudentAdvisoryBoard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/media" element={<Media />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/kidsafehq" element={<KidSafeComingSoon />} />
        <Route path="/kidsafehq/*" element={<KidSafeComingSoon />} />
        <Route path="/KidSafeHQ/*" element={<KidSafeComingSoon />} />
        <Route path="/kidsafehq2" element={<KidSafeHQ />} />
        <Route path="/kidsafehq-preview" element={<KidSafeHQ />} />
        <Route path="/kidsafehq2" element={<KidSafeHQ />} />
        <Route path="/news" element={<News />} />
        <Route path="/ct-laws-reporting" element={<CTLawsReporting />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/test-form" element={<TestForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);
