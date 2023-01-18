import { registerEnumType } from '@nestjs/graphql';

export enum TriggerScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    type = "type",
    status = "status",
    key = "key",
    value = "value",
    name = "name",
    description = "description",
    taskId = "taskId"
}


registerEnumType(TriggerScalarFieldEnum, { name: 'TriggerScalarFieldEnum', description: undefined })
