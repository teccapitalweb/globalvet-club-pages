/* Service worker de GlobalVet Club.
   Caché en tiempo de ejecución: la app funciona sin conexión con lo que ya
   se visitó; los assets con hash se guardan de forma inmutable. Se activa
   sólo cuando la página lo pide (SKIP_WAITING) para no romper sesiones. */
const VERSION = 'gv-club-v1';
const CORE = ['/', '/index.html', '/manifest.webmanifest', '/brand/globalvet-isotipo.png', '/brand/globalvet-favicon.svg'];
const STATIC_PREFIXES = ['/brand/', '/media/', '/materiales/', '/retos/', '/asistente/', '/pwa/', '/comunidad/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => Promise.all(CORE.map((url) => cache.add(url).catch(() => undefined)))),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

async function networkFirst(request) {
  const cache = await caches.open(VERSION);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put('/index.html', response.clone());
    return response;
  } catch {
    return (await cache.match('/index.html')) || Response.error();
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response && response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(request);
  const refresh = fetch(request).then((response) => {
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => undefined);
  return hit || (await refresh) || Response.error();
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') { event.respondWith(networkFirst(request)); return; }
  if (url.pathname.startsWith('/assets/')) { event.respondWith(cacheFirst(request)); return; }
  if (STATIC_PREFIXES.some((prefix) => url.pathname.startsWith(prefix))) { event.respondWith(staleWhileRevalidate(request)); }
});
