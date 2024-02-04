'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "da6590ebe6eea0627b6c0cb2c2a6a3b1",
"splash/img/light-2x.png": "b4838098ff93129ce34a026430a49c69",
"splash/img/dark-4x.png": "59d91a89205fe55c44379afbccaf1a7f",
"splash/img/light-3x.png": "9f8e19cf5dfd86d33c4f0b8e442c13e7",
"splash/img/dark-3x.png": "9f8e19cf5dfd86d33c4f0b8e442c13e7",
"splash/img/light-4x.png": "59d91a89205fe55c44379afbccaf1a7f",
"splash/img/dark-2x.png": "b4838098ff93129ce34a026430a49c69",
"splash/img/dark-1x.png": "ec0145767e707a0d9b7e28c941671383",
"splash/img/light-1x.png": "ec0145767e707a0d9b7e28c941671383",
"index.html": "b8f27845edf0a142acabde5947189e06",
"/": "b8f27845edf0a142acabde5947189e06",
"main.dart.js": "03bac443e527c712e3e942d6b4f26c01",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "9463fc8f802f34490dd3bea3325a287c",
"icons/Icon-192.png": "bda6eabe8d32cf506beb69e7b34774fc",
"icons/Icon-maskable-192.png": "bda6eabe8d32cf506beb69e7b34774fc",
"icons/Icon-maskable-512.png": "ff6b51bc2bde744866a66a2a8bb6e6ab",
"icons/Icon-512.png": "ff6b51bc2bde744866a66a2a8bb6e6ab",
"manifest.json": "5a2abb866530cc3c44097813c734b46c",
"assets/AssetManifest.json": "78d6110a622c744d867dc7c2e29fd784",
"assets/NOTICES": "fe0142579b529d00a829b356701a6920",
"assets/FontManifest.json": "2445193fe6e702d7cca8cb7b7d84fa4c",
"assets/AssetManifest.bin.json": "4a02ec156c213920b08b68c14939ba59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "7eb830749e29041950954bf5cb228d4e",
"assets/fonts/MaterialIcons-Regular.otf": "dd7a52a0545ba22df0875a57e309afd1",
"assets/assets/images/logo.png": "e6a0d3bfd353971b5264229fb2fbce6d",
"assets/assets/images/splash_logo.png": "c478b29566195f74deccf48361775c71",
"assets/assets/icons/navbar/camera-off.svg": "ced12d4a46bb91bec0511be525da66c0",
"assets/assets/icons/navbar/profile-off.svg": "929c91ead212dda408d12b05569fe4d1",
"assets/assets/icons/navbar/document-off.svg": "c7335f3570637c61e5d32ceab8c64aef",
"assets/assets/icons/navbar/camera-on.svg": "98c71a2440f5494911b3075b4c21f673",
"assets/assets/icons/navbar/profile-on.svg": "b85bf2e5f07e00fc8abf21dfafd5c70a",
"assets/assets/icons/navbar/document-on.svg": "8bd9754e03e3f10467eff467890938d1",
"assets/assets/icons/navbar/home-on.svg": "8fc960eac0afa32023c9a7a2fc85565f",
"assets/assets/icons/navbar/home-off.svg": "33fc187cd1577f1ae6e42e233bc0138e",
"assets/assets/icons/warning-red.svg": "edd0087eb0c7f725e310594c7c902601",
"assets/assets/lottie/system-regular-error.json": "eb2ccad7dd537cd5594536a6d343bb01",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
