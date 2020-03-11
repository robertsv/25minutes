import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  sendNotification(title: string, message: string) {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(r => {
      });
    }

    const notification = new Notification(title, {
      body: message,
    });

    setTimeout(() => {
      notification.close();
    }, 4000);
  }

}
