
import {User} from './user.entity'
import {Task} from './task.entity'


export class Comment {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
content: string ;
creatorId: number ;
creator?: User ;
taskId: number ;
task?: Task ;
}
