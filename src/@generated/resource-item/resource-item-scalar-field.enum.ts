import { registerEnumType } from '@nestjs/graphql';

export enum ResourceItemScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    description = "description",
    icon = "icon",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    resourceId = "resourceId"
}


registerEnumType(ResourceItemScalarFieldEnum, { name: 'ResourceItemScalarFieldEnum', description: undefined })
