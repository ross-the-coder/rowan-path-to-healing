import { createRoot, hydrateRoot, type Root } from "react-dom/client";
import { PageContextProvider } from "vike-react/usePageContext";

export { onRenderClient };

const logAgentEvent = (payload: Record<string, unknown>) => {
  if (typeof fetch !== "function") {
    return;
  }

  fetch("http://127.0.0.1:7242/ingest/8641a571-b5c8-43df-beb2-34bce3e2f3ef", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => {});
};

let root: Root | undefined;

async function onRenderClient(pageContext: { Page?: () => JSX.Element }) {
  const Page = pageContext.Page;
  if (!Page) {
    throw new Error("Missing page component in pageContext.");
  }

  const container = document.getElementById("root");
  if (!container) {
    throw new Error("Root container not found.");
  }

  const page = (
    <PageContextProvider pageContext={pageContext}>
      <Page />
    </PageContextProvider>
  );

  // #region agent log
  logAgentEvent({
    sessionId: "debug-session",
    runId: "seo-scan",
    hypothesisId: "H10",
    location: "onRenderClient.tsx:onRenderClient",
    message: "Client hydration start",
    data: { path: pageContext.urlPathname },
    timestamp: Date.now(),
  });
  // #endregion agent log

  if (pageContext.isHydration && container.innerHTML !== "") {
    root = hydrateRoot(container, page);
  } else {
    if (!root) {
      root = createRoot(container);
    }
    root.render(page);
  }

  // #region agent log
  logAgentEvent({
    sessionId: "debug-session",
    runId: "seo-scan",
    hypothesisId: "H10",
    location: "onRenderClient.tsx:onRenderClient",
    message: "Client hydration complete",
    data: { path: pageContext.urlPathname },
    timestamp: Date.now(),
  });
  // #endregion agent log
}
