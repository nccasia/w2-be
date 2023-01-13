import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutTaskInput } from './comment-update-without-task.input';
import { CommentCreateWithoutTaskInput } from './comment-create-without-task.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutTaskInput, {nullable:false})
    @Type(() => CommentUpdateWithoutTaskInput)
    update!: CommentUpdateWithoutTaskInput;

    @Field(() => CommentCreateWithoutTaskInput, {nullable:false})
    @Type(() => CommentCreateWithoutTaskInput)
    create!: CommentCreateWithoutTaskInput;
}
