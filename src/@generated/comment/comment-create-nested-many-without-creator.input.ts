import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutCreatorInput } from './comment-create-without-creator.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutCreatorInput } from './comment-create-or-connect-without-creator.input';
import { CommentCreateManyCreatorInputEnvelope } from './comment-create-many-creator-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutCreatorInput {

    @Field(() => [CommentCreateWithoutCreatorInput], {nullable:true})
    @Type(() => CommentCreateWithoutCreatorInput)
    create?: Array<CommentCreateWithoutCreatorInput>;

    @Field(() => [CommentCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCreatorInput>;

    @Field(() => CommentCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyCreatorInputEnvelope)
    createMany?: CommentCreateManyCreatorInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<CommentWhereUniqueInput>;
}
