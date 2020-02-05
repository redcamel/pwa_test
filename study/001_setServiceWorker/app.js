"use strict";
import serviceWorkerCheck from "./modules/serviceWorkerCheck.js";

export default function appStart() {
    serviceWorkerCheck('serviceWorker.js')
        .then(v => {
            console.log('서비스 워커 등록 성공');
            console.log(v);
            document.body.innerHTML = '<h1>서비스 워커 등록 성공</h1>';
            for (const k in v) document.body.innerHTML += `<br>${k} - ${v[k]}`;
        })
        .catch(v => {
            console.log('서비스 워커 등록 실패');
            console.log(v);
            document.body.innerHTML = '<h1>서비스 워커 등록 실패</h1>';
        })
}
appStart();