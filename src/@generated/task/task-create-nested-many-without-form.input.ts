import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutFormInput } from './task-create-without-form.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutFormInput } from './task-create-or-connect-without-form.input';
import { TaskCreateManyFormInputEnvelope } from './task-create-many-form-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutFormInput {

    @Field(() => [TaskCreateWithoutFormInput], {nullable:true})
    @Type(() => TaskCreateWithoutFormInput)
    create?: Array<TaskCreateWithoutFormInput>;

    @Field(() => [TaskCreateOrConnectWithoutFormInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutFormInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutFormInput>;

    @Field(() => TaskCreateManyFormInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyFormInputEnvelope)
    createMany?: TaskCreateManyFormInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
