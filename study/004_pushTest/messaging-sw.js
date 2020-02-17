console.log('서비스워커')
self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(event)
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    let data = event.data.json()
    console.log(data)



    const title = data['title'];
    const options = {
        body: data['text'],
        icon: 'img/crate.png',
        badge: 'img/image.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});