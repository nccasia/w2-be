import { registerEnumType } from '@nestjs/graphql';

export enum TriggerScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    type = "type",
    name = "name",
    description = "description",
    activityId = "activityId"
}


registerEnumType(TriggerScalarFieldEnum, { name: 'TriggerScalarFieldEnum', description: undefined })
