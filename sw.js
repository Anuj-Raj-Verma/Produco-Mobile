const CACHE_PREFIX = 'produco-';
const CACHE_VERSION = `${CACHE_PREFIX}v17`;
const ASSETS_TO_CACHE = [
  'index.html',
  'script.js',
  'style.css',
  'manifest.json',
  'icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    await cache.addAll(ASSETS_TO_CACHE.map(asset =>
      asset.startsWith('https://') ? asset : new URL(asset, self.registration.scope).href
    ));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_VERSION)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_VERSION);
    const indexUrl = new URL('index.html', self.registration.scope).href;

    try {
      const response = await fetch(request, { cache: 'no-cache' });
      if (response.status === 200 && response.type === 'basic') {
        const cacheKey = new Request(request.url);
        event.waitUntil(cache.put(cacheKey, response.clone()).catch(error => {
          console.warn('Unable to update the offline cache:', error);
        }));
      }
      return response;
    } catch {
      const cached = await cache.match(request, { ignoreSearch: true });
      if (cached) return cached;
      if (request.mode === 'navigate') return cache.match(indexUrl) || Response.error();
      return Response.error();
    }
  })());
});
