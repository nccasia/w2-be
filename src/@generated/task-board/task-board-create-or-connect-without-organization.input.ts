import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateWithoutOrganizationInput } from './task-board-create-without-organization.input';

@InputType()
export class TaskBoardCreateOrConnectWithoutOrganizationInput {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => TaskBoardCreateWithoutOrganizationInput)
    create!: TaskBoardCreateWithoutOrganizationInput;
}
