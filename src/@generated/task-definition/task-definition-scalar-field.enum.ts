import { registerEnumType } from '@nestjs/graphql';

export enum TaskDefinitionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    description = "description",
    icon = "icon",
    thumbnail = "thumbnail",
    descriptionTemplate = "descriptionTemplate",
    titleTemplate = "titleTemplate",
    statusTemplate = "statusTemplate",
    stateTemplate = "stateTemplate",
    notificationTemplate = "notificationTemplate",
    ctaTemplate = "ctaTemplate",
    statusConfig = "statusConfig",
    notificationConfig = "notificationConfig",
    processConfig = "processConfig",
    triggerConfig = "triggerConfig",
    ctaConfig = "ctaConfig",
    config = "config",
    organizationId = "organizationId",
    parentId = "parentId",
    stateConfig = "stateConfig",
    formId = "formId",
    keyTemplate = "keyTemplate",
    machineConfig = "machineConfig",
    contextConfig = "contextConfig"
}


registerEnumType(TaskDefinitionScalarFieldEnum, { name: 'TaskDefinitionScalarFieldEnum', description: undefined })
