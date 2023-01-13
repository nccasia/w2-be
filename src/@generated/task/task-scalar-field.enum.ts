import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    dueDate = "dueDate",
    priority = "priority",
    values = "values",
    type = "type",
    typeName = "typeName",
    cta = "cta",
    ctaName = "ctaName",
    state = "state",
    stateName = "stateName",
    status = "status",
    statusName = "statusName",
    stateValues = "stateValues",
    descriptionTemplate = "descriptionTemplate",
    titleTemplate = "titleTemplate",
    statusTemplate = "statusTemplate",
    stateTemplate = "stateTemplate",
    notificationTemplate = "notificationTemplate",
    ctaTemplate = "ctaTemplate",
    stateConfig = "stateConfig",
    statusConfig = "statusConfig",
    notificationConfig = "notificationConfig",
    processConfig = "processConfig",
    triggerConfig = "triggerConfig",
    ctaConfig = "ctaConfig",
    config = "config",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    definitionId = "definitionId",
    assigneeId = "assigneeId",
    creatorId = "creatorId",
    parentId = "parentId",
    organizationId = "organizationId",
    teamId = "teamId"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })
