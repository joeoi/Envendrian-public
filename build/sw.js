const CACHE_NAME = 'fire-mage-shell-v1'

self.addEventListener('install', (event) => {
  // Activate immediately to keep scope simple for static hosting
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', () => {
  // No-op handler keeps installability checks happy; passthrough network
})
