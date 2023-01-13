import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityCreateWithoutTaskDefinitionsInput } from './activity-create-without-task-definitions.input';

@InputType()
export class ActivityCreateOrConnectWithoutTaskDefinitionsInput {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    @Type(() => ActivityWhereUniqueInput)
    where!: ActivityWhereUniqueInput;

    @Field(() => ActivityCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => ActivityCreateWithoutTaskDefinitionsInput)
    create!: ActivityCreateWithoutTaskDefinitionsInput;
}
