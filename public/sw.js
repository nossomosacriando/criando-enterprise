const IMAGE_CACHE = 'criando-products-v1';

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(cache =>
        cache.match(request).then(response => {
          if (response) return response;

          return fetch(request).then(networkResponse => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        })
      )
    );
  }
});
