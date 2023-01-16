import { Module } from '@nestjs/common';
import { TaskDefinetionService } from './definitions/task-definetion.service';
import { TaskFactoryService } from './task-factory.service';
import { TasksHasuraService } from './tasks-hasura.service';
import { TaskResolver } from './tasks.resolver';
import { TaskService } from './tasks.service';

@Module({
  imports: [],
  providers: [
    TaskResolver,
    TaskService,
    TaskDefinetionService,
    TasksHasuraService,
    TaskFactoryService,
  ],
})
export class TasksModule {}
