import { registerEnumType } from '@nestjs/graphql';

export enum TaskBoardScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    description = "description",
    code = "code",
    icon = "icon",
    type = "type",
    viewType = "viewType",
    viewConfig = "viewConfig",
    visibility = "visibility",
    organizationId = "organizationId",
    projectId = "projectId",
    taskDefinitionId = "taskDefinitionId"
}


registerEnumType(TaskBoardScalarFieldEnum, { name: 'TaskBoardScalarFieldEnum', description: undefined })
