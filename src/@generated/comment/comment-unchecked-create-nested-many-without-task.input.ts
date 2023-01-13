import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutTaskInput } from './comment-create-without-task.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutTaskInput } from './comment-create-or-connect-without-task.input';
import { CommentCreateManyTaskInputEnvelope } from './comment-create-many-task-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutTaskInput {

    @Field(() => [CommentCreateWithoutTaskInput], {nullable:true})
    @Type(() => CommentCreateWithoutTaskInput)
    create?: Array<CommentCreateWithoutTaskInput>;

    @Field(() => [CommentCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutTaskInput>;

    @Field(() => CommentCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyTaskInputEnvelope)
    createMany?: CommentCreateManyTaskInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<CommentWhereUniqueInput>;
}
