import { registerEnumType } from '@nestjs/graphql';

export enum TriggerScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    type = "type",
    name = "name",
    description = "description",
    key = "key",
    status = "status",
    taskId = "taskId",
    value = "value"
}


registerEnumType(TriggerScalarFieldEnum, { name: 'TriggerScalarFieldEnum', description: undefined })
