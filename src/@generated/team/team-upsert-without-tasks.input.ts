import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamUpdateWithoutTasksInput } from './team-update-without-tasks.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutTasksInput } from './team-create-without-tasks.input';

@InputType()
export class TeamUpsertWithoutTasksInput {

    @Field(() => TeamUpdateWithoutTasksInput, {nullable:false})
    @Type(() => TeamUpdateWithoutTasksInput)
    update!: TeamUpdateWithoutTasksInput;

    @Field(() => TeamCreateWithoutTasksInput, {nullable:false})
    @Type(() => TeamCreateWithoutTasksInput)
    create!: TeamCreateWithoutTasksInput;
}
