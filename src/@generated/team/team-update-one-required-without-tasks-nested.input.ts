import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutTasksInput } from './team-create-without-tasks.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutTasksInput } from './team-create-or-connect-without-tasks.input';
import { TeamUpsertWithoutTasksInput } from './team-upsert-without-tasks.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { TeamUpdateWithoutTasksInput } from './team-update-without-tasks.input';

@InputType()
export class TeamUpdateOneRequiredWithoutTasksNestedInput {

    @Field(() => TeamCreateWithoutTasksInput, {nullable:true})
    @Type(() => TeamCreateWithoutTasksInput)
    create?: TeamCreateWithoutTasksInput;

    @Field(() => TeamCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutTasksInput)
    connectOrCreate?: TeamCreateOrConnectWithoutTasksInput;

    @Field(() => TeamUpsertWithoutTasksInput, {nullable:true})
    @Type(() => TeamUpsertWithoutTasksInput)
    upsert?: TeamUpsertWithoutTasksInput;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: TeamWhereUniqueInput;

    @Field(() => TeamUpdateWithoutTasksInput, {nullable:true})
    @Type(() => TeamUpdateWithoutTasksInput)
    update?: TeamUpdateWithoutTasksInput;
}
