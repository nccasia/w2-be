import { registerEnumType } from '@nestjs/graphql';

export enum UserPermissionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    userId = "userId",
    permissionId = "permissionId"
}


registerEnumType(UserPermissionScalarFieldEnum, { name: 'UserPermissionScalarFieldEnum', description: undefined })
