import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TaskWorkflowService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService
  ) {}

  async triggerTaskWorkflow(taskId: number, action: string, payload: any) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });
    const url = task.config['resumeWebhookUrl'];
    if (url) {
      return this.httpService.post(url, {
        task: task,
        data: payload,
      });
    }
    return null;
  }
}
