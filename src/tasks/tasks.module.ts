import { Module } from '@nestjs/common';
import { TaskResolver } from './tasks.resolver';
import { PasswordService } from 'src/auth/password.service';

@Module({
  imports: [],
  providers: [TaskResolver, PasswordService],
})
export class TasksModule {}
