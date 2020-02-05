// fetch가 없으면 설치 버튼이 뜨지않음
self.addEventListener('fetch', event => {
    console.log(event.request, event);
    event.respondWith(fetch(event.request))
});

self.addEventListener(
    'notificationclick',
    event => {
        console.log('fired notificationclick', event)
        if (event.action) console.log('click action', event.action)
    },
    false
);