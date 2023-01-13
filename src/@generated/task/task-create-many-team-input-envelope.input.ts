import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyTeamInput } from './task-create-many-team.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyTeamInputEnvelope {

    @Field(() => [TaskCreateManyTeamInput], {nullable:false})
    @Type(() => TaskCreateManyTeamInput)
    data!: Array<TaskCreateManyTeamInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
