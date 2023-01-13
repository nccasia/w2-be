import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    organizationId = "organizationId",
    permissionGroupId = "permissionGroupId"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
