import { registerEnumType } from '@nestjs/graphql';

export enum ResourceScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    code = "code",
    icon = "icon",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    organizationId = "organizationId"
}


registerEnumType(ResourceScalarFieldEnum, { name: 'ResourceScalarFieldEnum', description: undefined })
