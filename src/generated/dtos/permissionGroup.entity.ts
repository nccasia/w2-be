
import {Organization} from './organization.entity'
import {Permission} from './permission.entity'


export class PermissionGroup {
  id: number ;
name: string ;
description: string ;
createdAt: Date ;
updatedAt: Date ;
organization?: Organization ;
organizationId: number ;
permissions?: Permission[] ;
}
