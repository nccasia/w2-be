
import {Prisma} from '@prisma/client'
import {TaskDefinition} from './taskDefinition.entity'


export class Form {
  id: number ;
name: string ;
code: string ;
description: string ;
schema: Prisma.JsonValue ;
config: Prisma.JsonValue ;
validationConfig: Prisma.JsonValue ;
triggerConfig: Prisma.JsonValue ;
serializerConfig: Prisma.JsonValue ;
displayTemplate: string ;
displayConfig: Prisma.JsonValue ;
taskDefinitions?: TaskDefinition[] ;
createdAt: Date ;
updatedAt: Date ;
}
