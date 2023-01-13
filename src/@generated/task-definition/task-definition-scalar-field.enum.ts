import { registerEnumType } from '@nestjs/graphql';

export enum TaskDefinitionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    description = "description",
    icon = "icon",
    thumbnail = "thumbnail",
    formId = "formId",
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
    organizationId = "organizationId",
    parentId = "parentId",
    workflowId = "workflowId",
    actvityId = "actvityId"
}


registerEnumType(TaskDefinitionScalarFieldEnum, { name: 'TaskDefinitionScalarFieldEnum', description: undefined })
