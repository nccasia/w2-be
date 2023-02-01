import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateOneEventLogArgs } from 'src/@generated/event-log/create-one-event-log.args';

@Injectable()
export class EventLogService {
  constructor(private prisma: PrismaService) {}
  async logNewTaskCreated(task: Task) {
    return this.prisma.eventLog.create({
      data: {
        user: {
          connect: {
            id: task.creatorId,
          },
        },
        task: {
          connect: {
            id: task.id,
          },
        },
        organization: {
          connect: {
            id: task.organizationId,
          },
        },
        content: `Task ${task.key} created`,
        domain: 'TASK',
        action: 'TASK_CREATED',
      },
    });
  }
}
