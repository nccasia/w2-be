import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityCreateWithoutTriggersInput } from './activity-create-without-triggers.input';

@InputType()
export class ActivityCreateOrConnectWithoutTriggersInput {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    @Type(() => ActivityWhereUniqueInput)
    where!: ActivityWhereUniqueInput;

    @Field(() => ActivityCreateWithoutTriggersInput, {nullable:false})
    @Type(() => ActivityCreateWithoutTriggersInput)
    create!: ActivityCreateWithoutTriggersInput;
}
