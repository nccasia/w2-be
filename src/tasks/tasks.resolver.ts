import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { Task } from '../@generated/task/task.model';

@Resolver('Task')
export class TaskResolver {
  constructor(private readonly prisma: PrismaService) {}
}
