import { registerEnumType } from '@nestjs/graphql';

export enum EventLogScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    userId = "userId",
    taskId = "taskId",
    actionId = "actionId",
    organizationId = "organizationId"
}


registerEnumType(EventLogScalarFieldEnum, { name: 'EventLogScalarFieldEnum', description: undefined })
