"use strict";
import serviceWorkerCheck from "./modules/serviceWorkerCheck.js";
import makeNotification from "./modules/makeNotification.js";

const setTitle = title => {
    document.body.innerHTML += `<h1>${title}</h1>`;
};

const setServiceWorkerResult = (serviceworker, msg, success) => {
    console.log(serviceworker);
    setTitle(msg);
    if (success) for (const k in serviceworker) document.body.innerHTML += `<br>${k} - ${serviceworker[k]}`;
    setNotification(msg)
};

const setNotification = title => {
    setTitle(`
    current Notification.permission = ${Notification.permission}<br>
    current Notification.maxActions = ${Notification.maxActions}
    `);
    makeNotification(title);
};

const setNotificationButton = (title, option) => {
    let t0 = document.createElement('button');
    t0.innerHTML = title;
    t0.style.cssText = 'margin-bottom:5px;padding:10px;cursor:pointer;';
    t0.addEventListener('click', v => {
        makeNotification(title, option);
    });
    document.body.appendChild(t0)
    document.body.appendChild(document.createElement('br'));
};

function appStart() {
    serviceWorkerCheck('serviceWorker.js')
        .then(serviceWorker => {
            setServiceWorkerResult(serviceWorker, 'Service Worker Registration Success.', true);
            setNotificationButton('basic - Notification');
            setNotificationButton('body option-  Notification', {
                body: 'body text test'
            });
            setNotificationButton('icon option - Notification', {
                body: 'body text test',
                icon : 'img/crate.png'
            });
            setNotificationButton('image option - Notification', {
                body: 'body text test',
                icon : 'img/crate.png',
                image : 'img/image.png'
            });
            setNotificationButton('actions option - Notification', {
                body: 'body text test',
                icon : 'img/crate.png',
                image : 'img/image.png',
                actions : (_=> {
                    let t0 = [];
                    let i = Notification.maxActions;
                    while (i--) t0.push({
                        action : `action${Notification.maxActions-i}`,
                        title : `actionTestClose${Notification.maxActions-i}`
                    });
                    return t0
                })()
            });
            setNotificationButton('actions with icon option - Notification', {
                body: 'body text test',
                icon : 'img/crate.png',
                image : 'img/image.png',
                actions : (_=> {
                    let t0 = [];
                    let i = Notification.maxActions;
                    while (i--) t0.push({
                        action : `action${Notification.maxActions-i}`,
                        title : `actionTestClose${Notification.maxActions-i}`,
                        icon : 'img/crate.png'
                    });
                    return t0
                })()
            });
        })
        .catch(v => setServiceWorkerResult(v, 'Service Worker Registration Fail.', false))
}

appStart();