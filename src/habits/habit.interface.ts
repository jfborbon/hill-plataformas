export interface Habit {
    id: string;
    userId: string;
    name: string;
    category: 'hidratacion' | 'ejercicio' | 'sueño' | 'alimentacion' | 'otro';
    frequencyType: 'diario' | 'semanal' | 'mensual' | 'dias_especificos';
    active: boolean;
    createdAt: Date;
    updatedAt: Date;

    // opcionales:
    frequencyValue?: number; // no todos los habitos necesitan tener una frecuencia, creo
    goal?: number;
    unit?: string;
    reminders?: { time: string; repeat: string }[];
    history?: { date: string; value?: number }[];
}