import { registerEnumType } from '@nestjs/graphql';

export enum TaskStatus {
    NEW = "NEW",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    DEFERRED = "DEFERRED"
}


registerEnumType(TaskStatus, { name: 'TaskStatus', description: undefined })
