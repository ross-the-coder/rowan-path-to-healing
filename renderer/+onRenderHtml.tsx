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
        ${dangerouslySkipEscape(`<script>
        var serviceUrl = "//api.reciteme.com/asset/js?key=";
        var serviceKey = "962e0b59b944e388d7d38c22413636845a6f8fd8";
        var options = {};  // Options can be added as needed
        var autoLoad = false;
        var enableFragment = "#reciteEnable";
        var loaded = [], frag = !1; window.location.hash === enableFragment && (frag = !0); function loadScript(c, b) { var a = document.createElement("script"); a.type = "text/javascript"; a.readyState ? a.onreadystatechange = function () { if ("loaded" == a.readyState || "complete" == a.readyState) a.onreadystatechange = null, void 0 != b && b() } : void 0 != b && (a.onload = function () { b() }); a.src = c; document.getElementsByTagName("head")[0].appendChild(a) } function _rc(c) { c += "="; for (var b = document.cookie.split(";"), a = 0; a < b.length; a++) { for (var d = b[a]; " " == d.charAt(0);)d = d.substring(1, d.length); if (0 == d.indexOf(c)) return d.substring(c.length, d.length) } return null } function loadService(c) { for (var b = serviceUrl + serviceKey, a = 0; a < loaded.length; a++)if (loaded[a] == b) return; loaded.push(b); loadScript(serviceUrl + serviceKey, function () { "function" === typeof _reciteLoaded && _reciteLoaded(); "function" == typeof c && c(); Recite.load(options); Recite.Event.subscribe("Recite:load", function () { Recite.enable() }) }) } "true" == _rc("Recite.Persist") && loadService(); if (autoLoad && "false" != _rc("Recite.Persist") || frag) document.addEventListener ? document.addEventListener("DOMContentLoaded", function (c) { loadService() }) : loadService();
        </script>`)}
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
