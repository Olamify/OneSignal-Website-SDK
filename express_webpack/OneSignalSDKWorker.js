// OneSignalSDKWorker.js
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDKWorker.js');

self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'icon.png',
        badge: 'badge.png'
    };
    event.waitUntil(self.registration.showNotification('Olamify Notification', options));
});
