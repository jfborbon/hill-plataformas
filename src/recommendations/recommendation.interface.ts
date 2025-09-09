export interface Recommendation {
    id: string;
    title: string;
    description: string;
    category: 'hidratacion' | 'ejercicio' | 'sueño' | 'alimentacion' | 'otro';
}