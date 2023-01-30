import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateWithoutOrganizationInput } from './task-board-create-without-organization.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateOrConnectWithoutOrganizationInput } from './task-board-create-or-connect-without-organization.input';
import { TaskBoardUpsertWithWhereUniqueWithoutOrganizationInput } from './task-board-upsert-with-where-unique-without-organization.input';
import { TaskBoardCreateManyOrganizationInputEnvelope } from './task-board-create-many-organization-input-envelope.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { TaskBoardUpdateWithWhereUniqueWithoutOrganizationInput } from './task-board-update-with-where-unique-without-organization.input';
import { TaskBoardUpdateManyWithWhereWithoutOrganizationInput } from './task-board-update-many-with-where-without-organization.input';
import { TaskBoardScalarWhereInput } from './task-board-scalar-where.input';

@InputType()
export class TaskBoardUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [TaskBoardCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskBoardCreateWithoutOrganizationInput)
    create?: Array<TaskBoardCreateWithoutOrganizationInput>;

    @Field(() => [TaskBoardCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskBoardCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<TaskBoardCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [TaskBoardUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskBoardUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<TaskBoardUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => TaskBoardCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => TaskBoardCreateManyOrganizationInputEnvelope)
    createMany?: TaskBoardCreateManyOrganizationInputEnvelope;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    set?: Array<TaskBoardWhereUniqueInput>;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    disconnect?: Array<TaskBoardWhereUniqueInput>;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    delete?: Array<TaskBoardWhereUniqueInput>;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    connect?: Array<TaskBoardWhereUniqueInput>;

    @Field(() => [TaskBoardUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskBoardUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<TaskBoardUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [TaskBoardUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => TaskBoardUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<TaskBoardUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [TaskBoardScalarWhereInput], {nullable:true})
    @Type(() => TaskBoardScalarWhereInput)
    deleteMany?: Array<TaskBoardScalarWhereInput>;
}
