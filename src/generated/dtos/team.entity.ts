
import {User} from './user.entity'
import {Organization} from './organization.entity'
import {MemberOnTeams} from './memberOnTeams.entity'
import {Task} from './task.entity'


export class Team {
  id: number ;
name: string ;
bio: string ;
description: string ;
createdAt: Date ;
updatedAt: Date ;
creatorId: number ;
creator?: User ;
managerId: number ;
manager?: User ;
organizationId: number ;
organization?: Organization ;
memberOnTeams?: MemberOnTeams[] ;
tasks?: Task[] ;
}
