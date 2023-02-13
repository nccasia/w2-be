import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FormService } from './forms/form.service';
import { TaskWorkflowService } from './task-workflow.service';
import { TasksHasuraService } from './tasks-hasura.service';
import { TaskResolver } from './tasks.resolver';
import { TaskService } from './tasks.service';

@Module({
  imports: [],
  providers: [
    TaskResolver,
    TaskService,
    TasksHasuraService,
    TaskWorkflowService,
    FormService,
    HttpModule,
  ],
})
export class TasksModule {}
