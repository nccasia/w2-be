import { registerEnumType } from '@nestjs/graphql';

export enum EventLogScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    userId = "userId",
    taskId = "taskId",
    organizationId = "organizationId",
    context = "context",
    action = "action",
    intent = "intent",
    domain = "domain",
    content = "content"
}


registerEnumType(EventLogScalarFieldEnum, { name: 'EventLogScalarFieldEnum', description: undefined })
