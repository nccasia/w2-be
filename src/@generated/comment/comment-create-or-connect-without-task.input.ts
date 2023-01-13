import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutTaskInput } from './comment-create-without-task.input';

@InputType()
export class CommentCreateOrConnectWithoutTaskInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutTaskInput, {nullable:false})
    @Type(() => CommentCreateWithoutTaskInput)
    create!: CommentCreateWithoutTaskInput;
}
