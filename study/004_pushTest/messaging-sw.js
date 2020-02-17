console.log('서비스워커')
self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    const title = 'Push Codelab';
    const options = {
        body: event.data.text(),
        icon: 'img/crate.png',
        badge: 'img/image.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});