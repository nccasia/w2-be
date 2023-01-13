import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutOrganizationInput } from './task-create-without-organization.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutOrganizationInput } from './task-create-or-connect-without-organization.input';
import { TaskCreateManyOrganizationInputEnvelope } from './task-create-many-organization-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [TaskCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskCreateWithoutOrganizationInput)
    create?: Array<TaskCreateWithoutOrganizationInput>;

    @Field(() => [TaskCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutOrganizationInput>;

    @Field(() => TaskCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyOrganizationInputEnvelope)
    createMany?: TaskCreateManyOrganizationInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
