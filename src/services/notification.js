class NotificationService {
  constructor() {
    this.subscribers = [];
    this.notificationId = 0;
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(sub => sub !== callback);
  }

  showNotification(text) {
    const notification = {
      id: this.notificationId++,
      text: text
    };

    this.subscribers.forEach(callback => callback(notification));
  }
}

export default new NotificationService();
