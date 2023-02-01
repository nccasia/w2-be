import { Module } from '@nestjs/common';
import { TaskDefinetionService } from './definitions/task-definetion.service';
import { FormService } from './forms/form.service';
import { EventLogService } from './history/eventlog.service';
import { TaskFactoryService } from './task-factory.service';
import { TaskWorkflowService } from './task-workflow.service';
import { TasksHasuraService } from './tasks-hasura.service';
import { TaskResolver } from './tasks.resolver';
import { TaskService } from './tasks.service';
import { TriggerService } from './triggers/trigger.service';

@Module({
  imports: [],
  providers: [
    TaskResolver,
    TaskService,
    TaskDefinetionService,
    TasksHasuraService,
    TaskFactoryService,
    TaskWorkflowService,
    TriggerService,
    EventLogService,
    FormService,
  ],
})
export class TasksModule {}
