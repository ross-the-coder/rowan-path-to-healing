import "@/index.css";
import { AppRoot } from "@/AppRoot";
import { usePageContext } from "vike-react/usePageContext";

export default function Page() {
  const pageContext = usePageContext();
  return <AppRoot routerType={import.meta.env.SSR ? "static" : "browser"} urlPathname={pageContext.urlPathname} />;
}
