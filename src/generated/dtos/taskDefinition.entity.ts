
import {Prisma} from '@prisma/client'
import {Form} from './form.entity'
import {Task} from './task.entity'
import {Organization} from './organization.entity'
import {Workflow} from './workflow.entity'
import {Activity} from './activity.entity'


export class TaskDefinition {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
title: string ;
description: string ;
icon: string ;
thumbnail: string ;
formId: number  | null;
form?: Form  | null;
descriptionTemplate: string  | null;
titleTemplate: string  | null;
statusTemplate: string  | null;
stateTemplate: string  | null;
notificationTemplate: string  | null;
ctaTemplate: string  | null;
stageConfig: Prisma.JsonValue  | null;
statusConfig: Prisma.JsonValue  | null;
notificationConfig: Prisma.JsonValue  | null;
processConfig: Prisma.JsonValue  | null;
triggerConfig: Prisma.JsonValue  | null;
ctaConfig: Prisma.JsonValue  | null;
config: Prisma.JsonValue  | null;
taskInstances?: Task[] ;
organization?: Organization ;
organizationId: number ;
parentId: number  | null;
parentTaskDefinition?: TaskDefinition  | null;
subTaskDefinitions?: TaskDefinition[] ;
workflowId: number  | null;
workflow?: Workflow  | null;
actvityId: number  | null;
activity?: Activity  | null;
}
