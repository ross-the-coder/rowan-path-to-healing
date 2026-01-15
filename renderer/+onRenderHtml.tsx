import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { PageContextProvider } from "vike-react/usePageContext";

export { onRenderHtml };

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

async function onRenderHtml(pageContext: { Page?: () => JSX.Element }) {
  const helmetContext: Record<string, unknown> = {};
  const Page = pageContext.Page;

  // #region agent log
  logAgentEvent({
    sessionId: "debug-session",
    runId: "seo-scan",
    hypothesisId: "H10",
    location: "onRenderHtml.tsx:onRenderHtml",
    message: "SSR render start",
    data: { path: pageContext.urlPathname },
    timestamp: Date.now(),
  });
  // #endregion agent log

  const appHtml = Page
    ? renderToString(
        <PageContextProvider pageContext={pageContext}>
          <Page />
        </PageContextProvider>
      )
    : "";

  // #region agent log
  logAgentEvent({
    sessionId: "debug-session",
    runId: "seo-scan",
    hypothesisId: "H10",
    location: "onRenderHtml.tsx:onRenderHtml",
    message: "SSR render complete",
    data: { path: pageContext.urlPathname, htmlLength: appHtml.length },
    timestamp: Date.now(),
  });
  // #endregion agent log

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Rowan Center - Preventing Trauma, Responding to Crisis, Supporting Healing</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta
          name="description"
          content="The Rowan Center prevents sexual violence and trauma, provides 24/7 crisis support, and offers trauma-informed mental health care in South Fairfield County, CT."
        />
        <meta name="author" content="Lovable" />
        <link rel="stylesheet" href="https://use.typekit.net/kii4qzw.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.givechariot.com/components/chariot-components.umd.js"></script>
        ${dangerouslySkipEscape((helmetContext as any).helmet?.title?.toString?.() || "")}
        ${dangerouslySkipEscape((helmetContext as any).helmet?.meta?.toString?.() || "")}
        ${dangerouslySkipEscape((helmetContext as any).helmet?.link?.toString?.() || "")}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
