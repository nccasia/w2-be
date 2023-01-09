
import {Organization} from './organization.entity'
import {PermissionGroup} from './permissionGroup.entity'
import {UserPermission} from './userPermission.entity'


export class Permission {
  id: number ;
name: string ;
code: string ;
description: string ;
createdAt: Date ;
updatedAt: Date ;
organization?: Organization ;
organizationId: number ;
permissionGroup?: PermissionGroup ;
permissionGroupId: number ;
userPermissions?: UserPermission[] ;
}
