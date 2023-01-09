
import {Role} from '@prisma/client'
import {Organization} from './organization.entity'
import {Team} from './team.entity'
import {Task} from './task.entity'
import {MemberOnTeams} from './memberOnTeams.entity'
import {Post} from './post.entity'
import {Comment} from './comment.entity'
import {EventLog} from './eventLog.entity'
import {UserPermission} from './userPermission.entity'


export class User {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
email: string ;
password: string ;
firstname: string  | null;
lastname: string  | null;
organizationId: number ;
organization?: Organization ;
managedteams?: Team[] ;
createdteams?: Team[] ;
createdTasks?: Task[] ;
assignedTasks?: Task[] ;
memberOnTeams?: MemberOnTeams[] ;
posts?: Post[] ;
comments?: Comment[] ;
taskEvents?: EventLog[] ;
role: Role ;
userPermissions?: UserPermission[] ;
}
