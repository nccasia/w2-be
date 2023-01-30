import { registerEnumType } from '@nestjs/graphql';

export enum ProjectScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    description = "description",
    code = "code",
    icon = "icon",
    organizationId = "organizationId",
    taskDefinitionId = "taskDefinitionId",
    creatorId = "creatorId",
    managerId = "managerId",
    reporterId = "reporterId"
}


registerEnumType(ProjectScalarFieldEnum, { name: 'ProjectScalarFieldEnum', description: undefined })
