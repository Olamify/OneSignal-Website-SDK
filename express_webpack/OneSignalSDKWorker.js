importScripts("https://localhost:4001/sdks/web/v16/Dev-OneSignalSDK.sw.js");
// This script should be registered as a Service Worker, not included directly

if (&#39;serviceWorker&#39; in navigator) {
    navigator.serviceWorker.register(&#39;https://cdn.jsdelivr.net/gh/Olamify/OneSignal-Website-SDK@latest/express_webpack/OneSignalSDKWorker.js&#39;)
        .then(function(registration) {
            console.log(&#39;Service Worker registered with scope:&#39;, registration.scope);
        })
        .catch(function(error) {
            console.log(&#39;Service Worker registration failed:&#39;, error);
        });
}
