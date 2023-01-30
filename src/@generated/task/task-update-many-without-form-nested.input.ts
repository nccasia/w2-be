import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutFormInput } from './task-create-without-form.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutFormInput } from './task-create-or-connect-without-form.input';
import { TaskUpsertWithWhereUniqueWithoutFormInput } from './task-upsert-with-where-unique-without-form.input';
import { TaskCreateManyFormInputEnvelope } from './task-create-many-form-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutFormInput } from './task-update-with-where-unique-without-form.input';
import { TaskUpdateManyWithWhereWithoutFormInput } from './task-update-many-with-where-without-form.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutFormNestedInput {

    @Field(() => [TaskCreateWithoutFormInput], {nullable:true})
    @Type(() => TaskCreateWithoutFormInput)
    create?: Array<TaskCreateWithoutFormInput>;

    @Field(() => [TaskCreateOrConnectWithoutFormInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutFormInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutFormInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutFormInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutFormInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutFormInput>;

    @Field(() => TaskCreateManyFormInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyFormInputEnvelope)
    createMany?: TaskCreateManyFormInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutFormInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutFormInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutFormInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutFormInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutFormInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutFormInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
