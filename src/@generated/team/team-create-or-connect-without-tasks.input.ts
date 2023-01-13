import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutTasksInput } from './team-create-without-tasks.input';

@InputType()
export class TeamCreateOrConnectWithoutTasksInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamCreateWithoutTasksInput, {nullable:false})
    @Type(() => TeamCreateWithoutTasksInput)
    create!: TeamCreateWithoutTasksInput;
}
