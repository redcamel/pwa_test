self.addEventListener(
    'notificationclick',
    event => {
        console.log('fired notificationclick', event)
        if (event.action) console.log('click action', event.action)
    },
    false
);