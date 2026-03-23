self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function() { self.clients.claim(); });
self.addEventListener('fetch', function(e) {
  if (!e.request.url.startsWith('http')) return;
  e.respondWith(fetch(e.request).catch(function() { return caches.match(e.request); }));
});
