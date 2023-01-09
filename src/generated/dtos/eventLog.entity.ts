
import {User} from './user.entity'
import {Task} from './task.entity'
import {Action} from './action.entity'
import {Organization} from './organization.entity'


export class EventLog {
  id: number ;
createdAt: Date ;
userId: number  | null;
user?: User  | null;
taskId: number  | null;
task?: Task  | null;
actionId: number  | null;
Action?: Action  | null;
organizationId: number ;
organization?: Organization ;
}
