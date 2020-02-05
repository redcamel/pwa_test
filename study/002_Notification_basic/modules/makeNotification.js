"use strict";
let prevNotification;
export default function makeNotification(title, option) {
    Notification.requestPermission().then(permission => {
        switch (permission) {
            case "granted" :
                console.log('알림 허용상태');
                navigator.serviceWorker.ready.then(registration => {
                    registration.getNotifications().then(list=>{

                        for(const v of list) v.close();
                        setTimeout(v=>registration.showNotification(title, option), list.length ? 500 : 1)
                    });
                });
                break;
            case "denied" :
                console.log('알림 거부상태');
                break;
            case "default" :
                console.log('알림 표시했지만 아무 결정을 하지않고 닫아버린상태');
                break;
        }
    });
};
