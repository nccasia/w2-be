
import {Prisma,TaskPriority,TaskStatus} from '@prisma/client'
import {TaskDefinition} from './taskDefinition.entity'
import {Comment} from './comment.entity'
import {EventLog} from './eventLog.entity'
import {User} from './user.entity'
import {Organization} from './organization.entity'
import {Team} from './team.entity'


export class Task {
  id: number ;
title: string ;
description: string ;
dueDate: Date ;
priority: TaskPriority ;
status: TaskStatus ;
values: Prisma.JsonValue  | null;
ctaName: string ;
stateName: string ;
statusName: string ;
createdAt: Date ;
updatedAt: Date ;
definitionId: number ;
definition?: TaskDefinition ;
comments?: Comment[] ;
eventLogs?: EventLog[] ;
assigneeId: number ;
assignee?: User ;
creatorId: number ;
creator?: User ;
parentId: number  | null;
parentTask?: Task  | null;
subTasks?: Task[] ;
organizationId: number ;
organization?: Organization ;
teamId: number ;
team?: Team ;
}
