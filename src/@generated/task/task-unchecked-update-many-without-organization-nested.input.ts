import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutOrganizationInput } from './task-create-without-organization.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutOrganizationInput } from './task-create-or-connect-without-organization.input';
import { TaskUpsertWithWhereUniqueWithoutOrganizationInput } from './task-upsert-with-where-unique-without-organization.input';
import { TaskCreateManyOrganizationInputEnvelope } from './task-create-many-organization-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutOrganizationInput } from './task-update-with-where-unique-without-organization.input';
import { TaskUpdateManyWithWhereWithoutOrganizationInput } from './task-update-many-with-where-without-organization.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [TaskCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskCreateWithoutOrganizationInput)
    create?: Array<TaskCreateWithoutOrganizationInput>;

    @Field(() => [TaskCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => TaskCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyOrganizationInputEnvelope)
    createMany?: TaskCreateManyOrganizationInputEnvelope;

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

    @Field(() => [TaskUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
