// GlobalVet Club: navegación de red primero y respaldo sin conexión.
// Nunca se almacenan respuestas de API, Firebase, Stripe o contenido de otros orígenes.
const VERSION = 'globalvet-club-2026-10-20-v1';
const OFFLINE = '/offline.html';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.add(OFFLINE)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name !== VERSION).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'GET_VERSION' && event.ports?.[0]) {
    event.ports[0].postMessage({ version: VERSION, precache: 1 });
  }
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode !== 'navigate') return;
  event.respondWith((async () => {
    try { return await fetch(request); }
    catch { return (await caches.match(OFFLINE)) || Response.error(); }
  })());
});
