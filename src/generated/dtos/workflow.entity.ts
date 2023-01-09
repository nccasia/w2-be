
import {Prisma} from '@prisma/client'
import {Organization} from './organization.entity'
import {Activity} from './activity.entity'
import {TaskDefinition} from './taskDefinition.entity'


export class Workflow {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
name: string ;
description: string ;
config: Prisma.JsonValue ;
organizationId: number ;
organization?: Organization ;
activities?: Activity[] ;
taskDefinitions?: TaskDefinition[] ;
}
