import { registerEnumType } from '@nestjs/graphql';

export enum ActionType {
    CREATE_TASK = "CREATE_TASK",
    UPDATE_TASK = "UPDATE_TASK",
    DELETE_TASK = "DELETE_TASK",
    CREATE_COMMENT = "CREATE_COMMENT",
    UPDATE_STATUS = "UPDATE_STATUS",
    ASSIGN_USER = "ASSIGN_USER",
    SUMBIT_FORM = "SUMBIT_FORM"
}


registerEnumType(ActionType, { name: 'ActionType', description: undefined })
