import { registerEnumType } from '@nestjs/graphql';

export enum ActionType {
    CREATE_TASK = "CREATE_TASK",
    UPDATE_TASK = "UPDATE_TASK",
    DELETE_TASK = "DELETE_TASK"
}


registerEnumType(ActionType, { name: 'ActionType', description: undefined })
