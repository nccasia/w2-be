import { registerEnumType } from '@nestjs/graphql';

export enum TaskBoardSettingsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    key = "key",
    value = "value",
    taskBoardId = "taskBoardId"
}


registerEnumType(TaskBoardSettingsScalarFieldEnum, { name: 'TaskBoardSettingsScalarFieldEnum', description: undefined })
