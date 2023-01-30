import { registerEnumType } from '@nestjs/graphql';

export enum TaskBoardType {
    Organization = "Organization",
    Personal = "Personal",
    Project = "Project",
    Team = "Team"
}


registerEnumType(TaskBoardType, { name: 'TaskBoardType', description: undefined })
