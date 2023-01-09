
import {User} from './user.entity'
import {Permission} from './permission.entity'


export class UserPermission {
  id: number ;
createdAt: Date ;
user?: User ;
userId: number ;
permission?: Permission ;
permissionId: number ;
}
