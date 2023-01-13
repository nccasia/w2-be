import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutCreatorInput } from './comment-create-without-creator.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutCreatorInput } from './comment-create-or-connect-without-creator.input';
import { CommentUpsertWithWhereUniqueWithoutCreatorInput } from './comment-upsert-with-where-unique-without-creator.input';
import { CommentCreateManyCreatorInputEnvelope } from './comment-create-many-creator-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutCreatorInput } from './comment-update-with-where-unique-without-creator.input';
import { CommentUpdateManyWithWhereWithoutCreatorInput } from './comment-update-many-with-where-without-creator.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutCreatorNestedInput {

    @Field(() => [CommentCreateWithoutCreatorInput], {nullable:true})
    @Type(() => CommentCreateWithoutCreatorInput)
    create?: Array<CommentCreateWithoutCreatorInput>;

    @Field(() => [CommentCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCreatorInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutCreatorInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutCreatorInput>;

    @Field(() => CommentCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyCreatorInputEnvelope)
    createMany?: CommentCreateManyCreatorInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutCreatorInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutCreatorInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutCreatorInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutCreatorInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutCreatorInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
