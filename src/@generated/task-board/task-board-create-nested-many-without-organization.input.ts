import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateWithoutOrganizationInput } from './task-board-create-without-organization.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateOrConnectWithoutOrganizationInput } from './task-board-create-or-connect-without-organization.input';
import { TaskBoardCreateManyOrganizationInputEnvelope } from './task-board-create-many-organization-input-envelope.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';

@InputType()
export class TaskBoardCreateNestedManyWithoutOrganizationInput {

    @Field(() => [TaskBoardCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskBoardCreateWithoutOrganizationInput)
    create?: Array<TaskBoardCreateWithoutOrganizationInput>;

    @Field(() => [TaskBoardCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskBoardCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<TaskBoardCreateOrConnectWithoutOrganizationInput>;

    @Field(() => TaskBoardCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => TaskBoardCreateManyOrganizationInputEnvelope)
    createMany?: TaskBoardCreateManyOrganizationInputEnvelope;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    connect?: Array<TaskBoardWhereUniqueInput>;
}
