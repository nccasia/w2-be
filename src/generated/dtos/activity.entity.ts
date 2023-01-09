
import {Prisma} from '@prisma/client'
import {Workflow} from './workflow.entity'
import {TaskDefinition} from './taskDefinition.entity'
import {Trigger} from './trigger.entity'


export class Activity {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
name: string ;
description: string ;
config: Prisma.JsonValue ;
workflowId: number ;
workflow?: Workflow ;
taskDefinitions?: TaskDefinition[] ;
triggers?: Trigger[] ;
}
