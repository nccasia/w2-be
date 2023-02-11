import {
  TrackedHasuraEventHandler,
  HasuraInsertEvent,
} from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';
import { Task, TriggerStatus, User } from '@prisma/client';
import { TaskFactoryService } from './task-factory.service';
import { TaskWorkflowService } from './task-workflow.service';
import { TaskService } from './tasks.service';

@Injectable()
export class TasksHasuraService {
  constructor(
    private readonly taskFactoryService: TaskFactoryService,
    private readonly taskWorkflowService: TaskWorkflowService
  ) {}

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
