// Service Worker for PWA
self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function() { clients.claim(); });
self.addEventListener('fetch', function(e) { e.respondWith(fetch(e.request)); });
self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
