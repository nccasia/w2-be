import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutCreatorInput } from './comment-update-without-creator.input';
import { CommentCreateWithoutCreatorInput } from './comment-create-without-creator.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutCreatorInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutCreatorInput, {nullable:false})
    @Type(() => CommentUpdateWithoutCreatorInput)
    update!: CommentUpdateWithoutCreatorInput;

    @Field(() => CommentCreateWithoutCreatorInput, {nullable:false})
    @Type(() => CommentCreateWithoutCreatorInput)
    create!: CommentCreateWithoutCreatorInput;
}
