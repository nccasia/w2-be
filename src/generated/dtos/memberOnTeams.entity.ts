
import {Team} from './team.entity'
import {User} from './user.entity'


export class MemberOnTeams {
  team?: Team ;
teamId: number ;
user?: User ;
userId: number ;
assignedAt: Date ;
assignedBy: string ;
}
