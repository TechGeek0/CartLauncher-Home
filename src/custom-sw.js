

self.addEventListener('push', event => {
    if(event.data) {
      const data = JSON.parse(event.data.text());

      event.waitUntil(
        self.registration.showNotification(data.title, {
          body: data.content,
        })
      )

    }
});


const showNotification = (title,body) => {
    self.registration.showNotification(title, {
      body,
      icon: 'assets/icon/256.png',
      badge: 'assets/icon/32png.png'
    })
};


const shopifyCartBgSyncPlugin = new workbox.backgroundSync.Plugin('shopifyCartQueue', {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours
    onSync: async ({queue}) => {
      let entry;
      while (entry = await queue.shiftRequest()) {
        try {
          await fetch(entry.request.clone());
          // showNotification('Cart updated!', 'You are back online and your cart was successfully sent!')
        } catch (error) {
          await queue.unshiftRequest(entry);
          return;
        }
      }
    }
});

workbox.routing.registerRoute(
    new RegExp('^https:\/\/beardfield.com\/api\/2020-01\/graphql'),
    workbox.strategies.networkOnly({
        plugins: [shopifyCartBgSyncPlugin]
    }),
    'POST'
)


const netlifyFormsBgSyncPlugin = new workbox.backgroundSync.Plugin('netlifyFormsQueue', {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours
    onSync: async ({queue}) => {
      let entry;
      while (entry = await queue.shiftRequest()) {
        try {
          await fetch(entry.request.clone());
          showNotification('Submission sent!', 'You are back online and your submission was successfully sent!')
        } catch (error) {
          await queue.unshiftRequest(entry);
          return;
        }
      }
    }
});

workbox.routing.registerRoute(
    new RegExp('^https:\/\/beardfield.co\/$'),
    workbox.strategies.networkOnly({
        plugins: [netlifyFormsBgSyncPlugin]
    }),
    'POST'
)



 workbox.routing.registerRoute(
    /(\.js$|\.css$|static\/)/,
    new workbox.strategies.CacheFirst({
      cacheName: "scripts-cache",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
    "GET"
  )
  
  const pageDataHandler = new workbox.strategies.NetworkFirst({
    cacheName: "pageData-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
      }),
    ],
  })
  
  workbox.routing.registerRoute(
    /^https?:.*\/page-data\/.*\/page-data\.json/,
    args => {
      return pageDataHandler.handle(args).then(response => {
        
        if (!response) {
          return caches.match("/offline")
        } else if (response.status === 404) {
          return caches.match("/404")
        }
        return response
      })
    }
  )
  
  workbox.routing.registerRoute(
    /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "assets-cache",
    }),
    "GET"
  )
  
  workbox.routing.registerRoute(
    /^https?:\/\/fonts\.googleapis\.com\/css/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "google-fonts-css-cache",
    }),
    "GET"
  )
  