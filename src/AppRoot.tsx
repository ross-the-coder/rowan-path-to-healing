import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { AuthProvider } from "@/contexts/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "@/AppRoutes";
import ErrorBoundary from "@/components/ErrorBoundary";

const queryClient = new QueryClient();

type AppRootProps = {
  routerType: "browser" | "static";
  urlPathname?: string;
  helmetContext?: Record<string, unknown>;
};

export const AppRoot = ({ routerType, urlPathname, helmetContext }: AppRootProps) => {
  const Router = routerType === "static" ? StaticRouter : BrowserRouter;
  const routerProps = routerType === "static" ? { location: urlPathname || "/" } : {};

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Router {...routerProps}>
              <ErrorBoundary>
                <AppRoutes />
              </ErrorBoundary>
            </Router>
          </TooltipProvider>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};
