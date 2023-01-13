import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutOrganizationInput } from './task-definition-create-without-organization.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutOrganizationInput } from './task-definition-create-or-connect-without-organization.input';
import { TaskDefinitionUpsertWithWhereUniqueWithoutOrganizationInput } from './task-definition-upsert-with-where-unique-without-organization.input';
import { TaskDefinitionCreateManyOrganizationInputEnvelope } from './task-definition-create-many-organization-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithWhereUniqueWithoutOrganizationInput } from './task-definition-update-with-where-unique-without-organization.input';
import { TaskDefinitionUpdateManyWithWhereWithoutOrganizationInput } from './task-definition-update-many-with-where-without-organization.input';
import { TaskDefinitionScalarWhereInput } from './task-definition-scalar-where.input';

@InputType()
export class TaskDefinitionUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [TaskDefinitionCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutOrganizationInput)
    create?: Array<TaskDefinitionCreateWithoutOrganizationInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [TaskDefinitionUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskDefinitionUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<TaskDefinitionUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => TaskDefinitionCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyOrganizationInputEnvelope)
    createMany?: TaskDefinitionCreateManyOrganizationInputEnvelope;

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

    @Field(() => [TaskDefinitionUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<TaskDefinitionUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [TaskDefinitionUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<TaskDefinitionUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [TaskDefinitionScalarWhereInput], {nullable:true})
    @Type(() => TaskDefinitionScalarWhereInput)
    deleteMany?: Array<TaskDefinitionScalarWhereInput>;
}
