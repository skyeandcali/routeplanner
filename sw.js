self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
// Pass-through fetch; you can add caching later if desired.
self.addEventListener('fetch', (event) => {});
