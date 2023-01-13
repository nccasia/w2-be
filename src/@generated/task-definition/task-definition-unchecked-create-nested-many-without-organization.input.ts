import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutOrganizationInput } from './task-definition-create-without-organization.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutOrganizationInput } from './task-definition-create-or-connect-without-organization.input';
import { TaskDefinitionCreateManyOrganizationInputEnvelope } from './task-definition-create-many-organization-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [TaskDefinitionCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutOrganizationInput)
    create?: Array<TaskDefinitionCreateWithoutOrganizationInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutOrganizationInput>;

    @Field(() => TaskDefinitionCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyOrganizationInputEnvelope)
    createMany?: TaskDefinitionCreateManyOrganizationInputEnvelope;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionWhereUniqueInput>;
}
