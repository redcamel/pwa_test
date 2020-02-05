"use strict";
export default function serviceWorkerCheck(scriptURL) {
    return new Promise((resolve, reject) => {
        if (navigator.serviceWorker) {
            if (scriptURL) {
                navigator.serviceWorker.register(scriptURL)
                    .then(v => {
                        // console.log('서비스워커등록성공');
                        resolve(v);
                    })
                    .catch(v => {
                        // console.log('서비스워커등록실패');
                        reject(v)
                    })
            } else {
                // console.log('scriptURL 없음');
                reject(new Error('need scriptURL'))
            }

        } else {
            // console.log('서비스워커없음');
            reject(new Error('Not support ServiceWorker'))
        }
    })

};