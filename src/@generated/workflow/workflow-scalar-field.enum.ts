import { registerEnumType } from '@nestjs/graphql';

export enum WorkflowScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    description = "description",
    config = "config",
    organizationId = "organizationId"
}


registerEnumType(WorkflowScalarFieldEnum, { name: 'WorkflowScalarFieldEnum', description: undefined })
