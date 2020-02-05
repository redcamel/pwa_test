"use strict";
import serviceWorkerCheck from "./modules/serviceWorkerCheck.js";

function appStart() {
    serviceWorkerCheck('serviceWorker.js')
        .then(v => {
            console.log('Service Worker Registration Success.');
            console.log(v);
            document.body.innerHTML = '<h1>Service Worker Registration Success.</h1>';
            for (const k in v) document.body.innerHTML += `<br>${k} - ${v[k]}`;
        })
        .catch(v => {
            console.log('Service Worker Registration Fail.');
            console.log(v);
            document.body.innerHTML = '<h1>Service Worker Registration Fail</h1>';
        })
}
appStart();