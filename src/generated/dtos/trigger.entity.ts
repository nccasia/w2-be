
import {Prisma,TriggerType} from '@prisma/client'
import {Activity} from './activity.entity'


export class Trigger {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
type: TriggerType ;
name: string ;
description: string ;
config: Prisma.JsonValue ;
activityId: number ;
activity?: Activity ;
}
