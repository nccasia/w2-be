import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    content = "content",
    creatorId = "creatorId",
    taskId = "taskId"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
