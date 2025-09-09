export class CreateFeedbackDto {
    userId: string;
    type: 'bug' | 'suggestion';
    message: string;
    createdAt?: Date;
}