
import {Task} from './task.entity'
import {User} from './user.entity'
import {Team} from './team.entity'
import {Settings} from './settings.entity'
import {File} from './file.entity'
import {EventLog} from './eventLog.entity'
import {TaskDefinition} from './taskDefinition.entity'
import {Workflow} from './workflow.entity'
import {PermissionGroup} from './permissionGroup.entity'
import {Permission} from './permission.entity'
import {Resource} from './resource.entity'


export class Organization {
  id: number ;
name: string ;
description: string ;
createdAt: Date ;
updatedAt: Date ;
tasks?: Task[] ;
users?: User[] ;
teams?: Team[] ;
settings?: Settings[] ;
files?: File[] ;
eventLogs?: EventLog[] ;
taskDefinitions?: TaskDefinition[] ;
workflows?: Workflow[] ;
permissionGroups?: PermissionGroup[] ;
permissions?: Permission[] ;
resources?: Resource[] ;
}
