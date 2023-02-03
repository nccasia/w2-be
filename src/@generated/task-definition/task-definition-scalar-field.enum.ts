import { registerEnumType } from '@nestjs/graphql';

export enum TaskDefinitionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    keyTemplate = "keyTemplate",
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
    machineConfig = "machineConfig",
    contextConfig = "contextConfig",
    stateConfig = "stateConfig",
    statusConfig = "statusConfig",
    notificationConfig = "notificationConfig",
    processConfig = "processConfig",
    triggerConfig = "triggerConfig",
    ctaConfig = "ctaConfig",
    config = "config",
    organizationId = "organizationId",
    parentId = "parentId"
}


registerEnumType(TaskDefinitionScalarFieldEnum, { name: 'TaskDefinitionScalarFieldEnum', description: undefined })
