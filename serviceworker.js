self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('mi-pwa-cache').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'script.js',
                'style.css',
                // Agrega aquí los archivos que deseas cachear

                //carpata de assets
                'assets/default-user.png',
                'assets/insta-clone.png',
                'assets/ico.jpg',
                'assets/S01.jpg',
                'assets/S02.jpg',
                'assets/S03.jpg',
                'assets/S04.jpg',
                'assets/S05.jpg',
                'assets/S06.jpg',
                'assets/icons/add.svg',
                'assets/icons/bookmark.svg',
                'assets/icons/comment.svg',
                'assets/icons/heart.svg',
                'assets/icons/home.svg',
                'assets/icons/messenger.svg',
                'assets/icons/more.svg',
                'assets/icons/reels.svg',
                'assets/icons/search.svg',
                'assets/icons/share.svg',
                'assets/icons/shop.svg',

                'assets/fases/Picture1.jpg',
                'assets/fases/Picture2.jpg',
                'assets/fases/Picture3.jpg',
                'assets/fases/Picture4.jpg',
                'assets/fases/Picture5.jpg',
                'assets/fases/Picture6.jpg',
                'assets/fases/Picture7.jpg',
                'assets/fases/Picture8.jpg',
                'assets/fases/Picture9.jpg',
                'assets/fases/Picture10.jpg',
                'assets/fases/Picture11.jpg',

                //Carpetas de IMG
                'img/icon.ico',
                'img/icono16.png',
                'img/icono32.png',
                'img/icono64.png',
                'img/icono96.png',
                'img/icono128.png',
                'img/icono192.png',
                'img/icono256.png',
                'img/icono384.png',
                'img/icono512.png',
                'img/icono1024.png',


            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
