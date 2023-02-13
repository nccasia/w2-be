import {
  TrackedHasuraEventHandler,
  HasuraInsertEvent,
} from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskWorkflowService } from './task-workflow.service';

@Injectable()
export class TasksHasuraService {
  constructor(private readonly taskWorkflowService: TaskWorkflowService) {}

  @TrackedHasuraEventHandler({
    triggerName: 'task-created',
    tableName: 'Task',
    databaseName: 'W2DB',
    schema: 'public',
    definition: { type: 'insert' },
  })
  handleTaskCreated(evt: HasuraInsertEvent<Task>) {
    if (evt.event?.data?.new?.status !== '') {
      return;
    }
    // this.taskFactoryService.setupNewTask(evt.event.data.new);
  }
}
