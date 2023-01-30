import { registerEnumType } from '@nestjs/graphql';

export enum TaskBoardViewType {
    Todos = "Todos",
    Kanban = "Kanban",
    Calendar = "Calendar",
    Matrix = "Matrix"
}


registerEnumType(TaskBoardViewType, { name: 'TaskBoardViewType', description: undefined })
