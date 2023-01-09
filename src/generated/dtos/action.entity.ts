
import {ActionType} from '@prisma/client'
import {EventLog} from './eventLog.entity'


export class Action {
  id: number ;
createdAt: Date ;
type: ActionType ;
events?: EventLog[] ;
action: string ;
intent: string ;
domain: string ;
content: string ;
}
