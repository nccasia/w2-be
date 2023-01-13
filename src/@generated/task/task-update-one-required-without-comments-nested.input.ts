import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutCommentsInput } from './task-create-without-comments.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutCommentsInput } from './task-create-or-connect-without-comments.input';
import { TaskUpsertWithoutCommentsInput } from './task-upsert-without-comments.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutCommentsInput } from './task-update-without-comments.input';

@InputType()
export class TaskUpdateOneRequiredWithoutCommentsNestedInput {

    @Field(() => TaskCreateWithoutCommentsInput, {nullable:true})
    @Type(() => TaskCreateWithoutCommentsInput)
    create?: TaskCreateWithoutCommentsInput;

    @Field(() => TaskCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput;

    @Field(() => TaskUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => TaskUpsertWithoutCommentsInput)
    upsert?: TaskUpsertWithoutCommentsInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutCommentsInput, {nullable:true})
    @Type(() => TaskUpdateWithoutCommentsInput)
    update?: TaskUpdateWithoutCommentsInput;
}
