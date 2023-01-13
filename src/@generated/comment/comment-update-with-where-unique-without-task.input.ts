import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutTaskInput } from './comment-update-without-task.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutTaskInput, {nullable:false})
    @Type(() => CommentUpdateWithoutTaskInput)
    data!: CommentUpdateWithoutTaskInput;
}
