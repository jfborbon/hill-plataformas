import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class SupportService {
  private feedbacks: CreateFeedbackDto[] = [];

  createFeedback(data: CreateFeedbackDto) {
    const feedback = {
      ...data,
      createdAt: new Date(),
    };
    this.feedbacks.push(feedback);
    return feedback;
  }

  getAllFeedback() {
    return this.feedbacks;
  }
}