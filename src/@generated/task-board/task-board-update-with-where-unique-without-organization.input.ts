import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardUpdateWithoutOrganizationInput } from './task-board-update-without-organization.input';

@InputType()
export class TaskBoardUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => TaskBoardUpdateWithoutOrganizationInput)
    data!: TaskBoardUpdateWithoutOrganizationInput;
}
