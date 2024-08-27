importScripts("https://localhost:4001/sdks/web/v16/Dev-OneSignalSDK.sw.js");
// This script should be registered as a Service Worker, not included directly
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('cdn.jsdelivr.net/gh/Olamify/OneSignal-Website-SDK/express_webpack/OneSignalSDKWorker.js')
        .then(function(registration) {
            console.log('Service Worker registered:', registration);
        })
        .catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}
