// Network first so updates show up right away; the cache is the offline fallback.
const CACHE = 'budget-v1';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // no-cache: always ask the server whether the file changed, so updates show up right away
  const same = new URL(e.request.url).origin === location.origin;
  e.respondWith((same ? fetch(e.request.url, { cache: 'no-cache' }) : fetch(e.request))
    .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })
    .catch(() => caches.match(e.request, { ignoreSearch: true })));
});
