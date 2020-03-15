import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  sendNotification(title: string, message: string) {
    try {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(r => {
        });
      }

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

    } catch (e) {
      // notification sending failed
    }
  }

}
