import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutTasksInput } from './team-create-without-tasks.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutTasksInput } from './team-create-or-connect-without-tasks.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';

@InputType()
export class TeamCreateNestedOneWithoutTasksInput {

    @Field(() => TeamCreateWithoutTasksInput, {nullable:true})
    @Type(() => TeamCreateWithoutTasksInput)
    create?: TeamCreateWithoutTasksInput;

    @Field(() => TeamCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutTasksInput)
    connectOrCreate?: TeamCreateOrConnectWithoutTasksInput;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: TeamWhereUniqueInput;
}
