import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutFormInput } from './task-definition-create-without-form.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutFormInput } from './task-definition-create-or-connect-without-form.input';
import { TaskDefinitionUpsertWithWhereUniqueWithoutFormInput } from './task-definition-upsert-with-where-unique-without-form.input';
import { TaskDefinitionCreateManyFormInputEnvelope } from './task-definition-create-many-form-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithWhereUniqueWithoutFormInput } from './task-definition-update-with-where-unique-without-form.input';
import { TaskDefinitionUpdateManyWithWhereWithoutFormInput } from './task-definition-update-many-with-where-without-form.input';
import { TaskDefinitionScalarWhereInput } from './task-definition-scalar-where.input';

@InputType()
export class TaskDefinitionUpdateManyWithoutFormNestedInput {

    @Field(() => [TaskDefinitionCreateWithoutFormInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutFormInput)
    create?: Array<TaskDefinitionCreateWithoutFormInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutFormInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutFormInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutFormInput>;

    @Field(() => [TaskDefinitionUpsertWithWhereUniqueWithoutFormInput], {nullable:true})
    @Type(() => TaskDefinitionUpsertWithWhereUniqueWithoutFormInput)
    upsert?: Array<TaskDefinitionUpsertWithWhereUniqueWithoutFormInput>;

    @Field(() => TaskDefinitionCreateManyFormInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyFormInputEnvelope)
    createMany?: TaskDefinitionCreateManyFormInputEnvelope;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    set?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    disconnect?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    delete?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionUpdateWithWhereUniqueWithoutFormInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateWithWhereUniqueWithoutFormInput)
    update?: Array<TaskDefinitionUpdateWithWhereUniqueWithoutFormInput>;

    @Field(() => [TaskDefinitionUpdateManyWithWhereWithoutFormInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateManyWithWhereWithoutFormInput)
    updateMany?: Array<TaskDefinitionUpdateManyWithWhereWithoutFormInput>;

    @Field(() => [TaskDefinitionScalarWhereInput], {nullable:true})
    @Type(() => TaskDefinitionScalarWhereInput)
    deleteMany?: Array<TaskDefinitionScalarWhereInput>;
}
