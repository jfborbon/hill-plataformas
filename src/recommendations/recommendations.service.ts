import { Injectable } from '@nestjs/common';
import { Recommendation } from './recommendation.interface';

@Injectable()
export class RecommendationsService {
    private recommendations: Recommendation[] = [
        {
            id: 'r1',
            title: 'Bebe 8 vasos de agua al día',
            description: 'La hidratación adecuada mejora tu energía y concentración.',
            category: 'hidratacion',
        },
        {
            id: 'r2',
            title: 'Camina 30 minutos',
            description: 'El ejercicio ligero diario ayuda a reducir el estrés.',
            category: 'ejercicio',
        },
        {
            id: 'r3',
            title: 'Duerme al menos 7 horas',
            description: 'Un buen descanso fortalece tu memoria y sistema inmune.',
            category: 'sueño',
        },
    ];

    getAllRecommendations(): Recommendation[] {
        return this.recommendations;
    }
}
