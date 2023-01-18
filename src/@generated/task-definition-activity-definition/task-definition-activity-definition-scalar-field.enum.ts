import { registerEnumType } from '@nestjs/graphql';

export enum TaskDefinitionActivityDefinitionScalarFieldEnum {
    id = "id",
    taskDefinitionId = "taskDefinitionId",
    activityDefinitionId = "activityDefinitionId",
    config = "config",
    initialValue = "initialValue",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TaskDefinitionActivityDefinitionScalarFieldEnum, { name: 'TaskDefinitionActivityDefinitionScalarFieldEnum', description: undefined })
