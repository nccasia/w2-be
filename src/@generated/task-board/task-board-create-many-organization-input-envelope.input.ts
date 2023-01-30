import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateManyOrganizationInput } from './task-board-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskBoardCreateManyOrganizationInputEnvelope {

    @Field(() => [TaskBoardCreateManyOrganizationInput], {nullable:false})
    @Type(() => TaskBoardCreateManyOrganizationInput)
    data!: Array<TaskBoardCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
