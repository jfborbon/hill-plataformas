import { Controller, Post, Body, Get } from '@nestjs/common';
import { SupportService } from './support.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Post('feedback')
  createFeedback(@Body() body: CreateFeedbackDto) {
    return this.supportService.createFeedback(body);
  }

  @Get('feedback')
  getAllFeedback() {
    return this.supportService.getAllFeedback();
  }
}