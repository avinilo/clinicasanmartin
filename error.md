Navigated to http://localhost:3000/
inject.js:38 [yoroi/prod] dapp-connector is successfully injected into localhost
C:\Users\Alvaro\Downloads\pagina web mantexia\components\Header.tsx:39 A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <HotReload assetPrefix="" globalError={[...]}>
      <AppDevOverlayErrorBoundary globalError={[...]}>
        <ReplaySsrOnlyErrors>
        <DevRootHTTPAccessFallbackBoundary>
          <HTTPAccessFallbackBoundary notFound={<NotAllowedRootHTTPFallbackError>}>
            <HTTPAccessFallbackErrorBoundary pathname="/" notFound={<NotAllowedRootHTTPFallbackError>} ...>
              <RedirectBoundary>
                <RedirectErrorBoundary router={{...}}>
                  <Head>
                  <__next_root_layout_boundary__>
                    <SegmentViewNode type="layout" pagePath="layout.tsx">
                      <SegmentTrieNode>
                      <link>
                      <RootLayout>
                        <html lang="es" className="scroll-smooth">
                          <head>
                          <body className="__variable...">
                            <Script>
                            <Script>
                            <Script>
                            <PerformanceOptimizer>
                              <CriticalResourcesPreloader>
                              <ScrollRestoration>
                              <Header>
                                <header
                                  className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent"
                                  style={{
+                                   willChange: "auto"
+                                   backfaceVisibility: "hidden"
+                                   transform: "translateZ(0)"
                                  }}
                                >
                              ...
                  ...

overrideMethod @ hook.js:608
error @ intercept-console-error.js:57
eval @ react-dom-client.development.js:4707
runWithFiberInDEV @ react-dom-client.development.js:872
emitPendingHydrationWarnings @ react-dom-client.development.js:4706
completeWork @ react-dom-client.development.js:11541
runWithFiberInDEV @ react-dom-client.development.js:875
completeUnitOfWork @ react-dom-client.development.js:15863
performUnitOfWork @ react-dom-client.development.js:15744
workLoopConcurrentByScheduler @ react-dom-client.development.js:15721
renderRootConcurrent @ react-dom-client.development.js:15696
performWorkOnRoot @ react-dom-client.development.js:14990
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:16816
performWorkUntilDeadline @ scheduler.development.js:45
<header>
exports.jsxDEV @ react-jsx-dev-runtime.development.js:323
Header @ C:\Users\Alvaro\Downloads\pagina web mantexia\components\Header.tsx:39
react_stack_bottom_frame @ react-dom-client.development.js:23584
renderWithHooksAgain @ react-dom-client.development.js:6893
renderWithHooks @ react-dom-client.development.js:6805
updateFunctionComponent @ react-dom-client.development.js:9247
beginWork @ react-dom-client.development.js:10807
runWithFiberInDEV @ react-dom-client.development.js:872
performUnitOfWork @ react-dom-client.development.js:15727
workLoopConcurrentByScheduler @ react-dom-client.development.js:15721
renderRootConcurrent @ react-dom-client.development.js:15696
performWorkOnRoot @ react-dom-client.development.js:14990
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:16816
performWorkUntilDeadline @ scheduler.development.js:45
"use client"
RootLayout @ layout.tsx:273
initializeElement @ react-server-dom-webpack-client.browser.development.js:1344
eval @ react-server-dom-webpack-client.browser.development.js:3066
initializeModelChunk @ react-server-dom-webpack-client.browser.development.js:1246
readChunk @ react-server-dom-webpack-client.browser.development.js:935
react_stack_bottom_frame @ react-dom-client.development.js:23691
resolveLazy @ react-dom-client.development.js:5177
createChild @ react-dom-client.development.js:5494
reconcileChildrenArray @ react-dom-client.development.js:5801
reconcileChildFibersImpl @ react-dom-client.development.js:6124
eval @ react-dom-client.development.js:6229
reconcileChildren @ react-dom-client.development.js:8783
beginWork @ react-dom-client.development.js:11057
runWithFiberInDEV @ react-dom-client.development.js:872
performUnitOfWork @ react-dom-client.development.js:15727
workLoopConcurrentByScheduler @ react-dom-client.development.js:15721
renderRootConcurrent @ react-dom-client.development.js:15696
performWorkOnRoot @ react-dom-client.development.js:14990
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:16816
performWorkUntilDeadline @ scheduler.development.js:45
<RootLayout>
initializeFakeTask @ react-server-dom-webpack-client.browser.development.js:2529
initializeDebugInfo @ react-server-dom-webpack-client.browser.development.js:2554
initializeDebugChunk @ react-server-dom-webpack-client.browser.development.js:1193
processFullStringRow @ react-server-dom-webpack-client.browser.development.js:2850
processFullBinaryRow @ react-server-dom-webpack-client.browser.development.js:2766
processBinaryChunk @ react-server-dom-webpack-client.browser.development.js:2969
progress @ react-server-dom-webpack-client.browser.development.js:3233
"use server"
ResponseInstance @ react-server-dom-webpack-client.browser.development.js:2041
createResponseFromOptions @ react-server-dom-webpack-client.browser.development.js:3094
exports.createFromReadableStream @ react-server-dom-webpack-client.browser.development.js:3478
eval @ app-index.js:130
(app-pages-browser)/./node_modules/next/dist/client/app-index.js @ main-app.js?v=1761255139865:160
options.factory @ webpack.js:1
__webpack_require__ @ webpack.js:1
fn @ webpack.js:1
eval @ app-next-dev.js:14
eval @ app-bootstrap.js:59
loadScriptsInSequence @ app-bootstrap.js:24
appBootstrap @ app-bootstrap.js:53
eval @ app-next-dev.js:13
(app-pages-browser)/./node_modules/next/dist/client/app-next-dev.js @ main-app.js?v=1761255139865:182
options.factory @ webpack.js:1
__webpack_require__ @ webpack.js:1
__webpack_exec__ @ main-app.js?v=1761255139865:1878
(anonymous) @ main-app.js?v=1761255139865:1879
webpackJsonpCallback @ webpack.js:1
(anonymous) @ main-app.js?v=1761255139865:9
C:\Users\Alvaro\Downloads\pagina web mantexia\lib\final-optimizations.ts:180 Using system fonts - no custom fonts to preload
C:\Users\Alvaro\Downloads\pagina web mantexia\lib\final-optimizations.ts:318 Final optimizations initialized
C:\Users\Alvaro\Downloads\pagina web mantexia\components\ChatBot.tsx:100 ChatBot mounted - bubble hidden 2025-10-23T21:32:20.821Z
C:\Users\Alvaro\Downloads\pagina web mantexia\components\ChatBot.tsx:100 ChatBot mounted - bubble hidden 2025-10-23T21:32:20.821Z
sw.js:212 Uncaught (in promise) TypeError: Failed to execute 'put' on 'Cache': Request method 'POST' is unsupported
    at sw.js:212:13
(anonymous) @ sw.js:212
Promise.then
staleWhileRevalidateStrategy @ sw.js:210
await in staleWhileRevalidateStrategy
(anonymous) @ sw.js:108
C:\Users\Alvaro\Downloads\pagina web mantexia\lib\final-optimizations.ts:289 CLS: 0.000759235999947562
(index):1 The resource http://localhost:3000/og-image.png was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
(index):1 The resource http://localhost:3000/MANTEXIA__solo_nombre_-2-removebg-preview-e1749230794480.png was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
