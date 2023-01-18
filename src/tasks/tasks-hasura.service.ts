import {
  TrackedHasuraEventHandler,
  HasuraInsertEvent,
} from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';
import { Task, User } from '@prisma/client';
import { TaskFactoryService } from './task-factory.service';

@Injectable()
export class TasksHasuraService {
  constructor(private readonly taskFactoryService: TaskFactoryService) {}

  @TrackedHasuraEventHandler({
    triggerName: 'task-created',
    tableName: 'Task',
    databaseName: 'W2DB',
    schema: 'public',
    definition: { type: 'insert' },
  })
  handleUserCreated(evt: HasuraInsertEvent<Task>) {
    if (evt.event?.data?.new?.status !== '') {
      return;
    }
    this.taskFactoryService.setupNewTask(evt.event.data.new);
  }
}
