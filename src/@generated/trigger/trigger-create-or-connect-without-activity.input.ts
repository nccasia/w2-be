import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { Type } from 'class-transformer';
import { TriggerCreateWithoutActivityInput } from './trigger-create-without-activity.input';

@InputType()
export class TriggerCreateOrConnectWithoutActivityInput {

    @Field(() => TriggerWhereUniqueInput, {nullable:false})
    @Type(() => TriggerWhereUniqueInput)
    where!: TriggerWhereUniqueInput;

    @Field(() => TriggerCreateWithoutActivityInput, {nullable:false})
    @Type(() => TriggerCreateWithoutActivityInput)
    create!: TriggerCreateWithoutActivityInput;
}
