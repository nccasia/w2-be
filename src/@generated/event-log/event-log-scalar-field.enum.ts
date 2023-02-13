import { registerEnumType } from '@nestjs/graphql';

export enum EventLogScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    userId = "userId",
    taskId = "taskId",
    organizationId = "organizationId",
    content = "content",
    context = "context",
    action = "action",
    domain = "domain",
    intent = "intent"
}


registerEnumType(EventLogScalarFieldEnum, { name: 'EventLogScalarFieldEnum', description: undefined })
