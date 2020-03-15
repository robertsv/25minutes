import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  sendNotification(title: string, message: string) {
    if (!('Notification' in window)) {
      // this browser does not support desktop notification
      return;
    }
    if (Notification.permission === 'granted') {
      const notification = new Notification(title, {
        body: message,
      });

      setTimeout(() => {
        try {
          notification.close();
        } catch (e) {
          // notification sending failed
        }
      }, 4000);
    }
  }


  requestPermission() {
    if (!('Notification' in window)) {
      // this browser does not support desktop notification
      return;
    }
    if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(r => {
      });
    }
  }
}
