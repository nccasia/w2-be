import { registerEnumType } from '@nestjs/graphql';

export enum PermissionGroupScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    organizationId = "organizationId"
}


registerEnumType(PermissionGroupScalarFieldEnum, { name: 'PermissionGroupScalarFieldEnum', description: undefined })
