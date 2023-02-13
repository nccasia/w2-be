import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    dueDate = "dueDate",
    priority = "priority",
    values = "values",
    ctaName = "ctaName",
    stateName = "stateName",
    statusName = "statusName",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    definitionId = "definitionId",
    assigneeId = "assigneeId",
    creatorId = "creatorId",
    parentId = "parentId",
    organizationId = "organizationId",
    teamId = "teamId",
    config = "config",
    cta = "cta",
    ctaTemplate = "ctaTemplate",
    descriptionTemplate = "descriptionTemplate",
    notificationTemplate = "notificationTemplate",
    properties = "properties",
    state = "state",
    stateTemplate = "stateTemplate",
    stateValues = "stateValues",
    statusTemplate = "statusTemplate",
    titleTemplate = "titleTemplate",
    type = "type",
    typeName = "typeName",
    status = "status",
    formConfig = "formConfig",
    key = "key",
    isActive = "isActive",
    formId = "formId",
    projectId = "projectId",
    reporterId = "reporterId"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })
