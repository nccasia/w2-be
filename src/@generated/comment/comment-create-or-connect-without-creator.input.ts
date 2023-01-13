import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutCreatorInput } from './comment-create-without-creator.input';

@InputType()
export class CommentCreateOrConnectWithoutCreatorInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutCreatorInput, {nullable:false})
    @Type(() => CommentCreateWithoutCreatorInput)
    create!: CommentCreateWithoutCreatorInput;
}
