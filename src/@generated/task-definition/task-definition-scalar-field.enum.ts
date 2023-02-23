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
    organizationId = "organizationId",
    parentId = "parentId",
    formId = "formId",
    keyTemplate = "keyTemplate",
    machineConfig = "machineConfig"
}


registerEnumType(TaskDefinitionScalarFieldEnum, { name: 'TaskDefinitionScalarFieldEnum', description: undefined })
