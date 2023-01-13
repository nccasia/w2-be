import {
  TrackedHasuraEventHandler,
  HasuraUpdateEvent,
  HasuraInsertEvent,
} from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class TasksEventsHasura {
  @TrackedHasuraEventHandler({
    triggerName: 'task-created',
    tableName: 'Task',
    definition: { type: 'insert' },
  })
  handleUserCreated(evt: HasuraInsertEvent<User>) {
    console.log(evt);
    // trigger workflow
  }

  @TrackedHasuraEventHandler({
    triggerName: 'user-updated',
    tableName: 'user',
    definition: { type: 'update', columns: ['avatarUrl'] },
  })
  handleUserUpdated(evt: HasuraUpdateEvent<User>) {
    console.log(evt);
  }
}
