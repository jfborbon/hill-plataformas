export interface NotificationPreferences {
  userId: string;
  email: boolean;
  push: boolean;
  sms: boolean;
  reminderTimes: string[];
}