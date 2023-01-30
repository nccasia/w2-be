import { registerEnumType } from '@nestjs/graphql';

export enum ProjectSettingsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    key = "key",
    value = "value",
    projectId = "projectId"
}


registerEnumType(ProjectSettingsScalarFieldEnum, { name: 'ProjectSettingsScalarFieldEnum', description: undefined })
