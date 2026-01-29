import { useLocation } from "react-router-dom";

const PREVIEW_BASE_PATHS = ["/kidsafehq-preview", "/kidsafehq2"];

export const useKidSafeBasePath = () => {
  const { pathname } = useLocation();
  const previewBase = PREVIEW_BASE_PATHS.find((basePath) => pathname.startsWith(basePath));

  return previewBase ?? "/kidsafehq";
};
