export class UpdatePreferencesDto {
  userId: string;
  email?: boolean;
  push?: boolean;
  sms?: boolean;
  reminderTimes?: string[];
}
