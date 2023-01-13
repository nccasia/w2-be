import { registerEnumType } from '@nestjs/graphql';

export enum ActivityScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    description = "description",
    config = "config",
    workflowId = "workflowId"
}


registerEnumType(ActivityScalarFieldEnum, { name: 'ActivityScalarFieldEnum', description: undefined })
