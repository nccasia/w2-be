import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutTaskInput } from './comment-create-without-task.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutTaskInput } from './comment-create-or-connect-without-task.input';
import { CommentUpsertWithWhereUniqueWithoutTaskInput } from './comment-upsert-with-where-unique-without-task.input';
import { CommentCreateManyTaskInputEnvelope } from './comment-create-many-task-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutTaskInput } from './comment-update-with-where-unique-without-task.input';
import { CommentUpdateManyWithWhereWithoutTaskInput } from './comment-update-many-with-where-without-task.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutTaskNestedInput {

    @Field(() => [CommentCreateWithoutTaskInput], {nullable:true})
    @Type(() => CommentCreateWithoutTaskInput)
    create?: Array<CommentCreateWithoutTaskInput>;

    @Field(() => [CommentCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutTaskInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutTaskInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => CommentCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyTaskInputEnvelope)
    createMany?: CommentCreateManyTaskInputEnvelope;

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

    @Field(() => [CommentUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutTaskInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutTaskInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
