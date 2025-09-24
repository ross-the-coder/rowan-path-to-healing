import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Prevent from "./pages/Prevent";
import Respond from "./pages/Respond";
import TraumaRecovery from "./pages/TraumaRecovery";
import About from "./pages/About";
import Financials from "./pages/Financials";
import Careers from "./pages/Careers";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import Media from "./pages/Media";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prevent" element={<Prevent />} />
          <Route path="/respond" element={<Respond />} />
          <Route path="/trauma-recovery" element={<TraumaRecovery />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/financials" element={<Financials />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/about/board" element={<BoardOfDirectors />} />
          <Route path="/about/media" element={<Media />} />
          <Route path="/about/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
