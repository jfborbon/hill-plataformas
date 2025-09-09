export class UpdateHabitDto {
  name?: string;
  category?: 'hidratacion' | 'ejercicio' | 'sueño' | 'alimentacion' | 'otro';
  frequencyType?: 'diario' | 'semanal' | 'mensual' | 'dias_especificos';
  frequencyValue?: number;
  goal?: number;
  unit?: string;
  reminders?: { time: string; repeat: string }[];
  active?: boolean;
}
