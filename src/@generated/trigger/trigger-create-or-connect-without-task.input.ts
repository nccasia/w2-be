import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { Type } from 'class-transformer';
import { TriggerCreateWithoutTaskInput } from './trigger-create-without-task.input';

@InputType()
export class TriggerCreateOrConnectWithoutTaskInput {

    @Field(() => TriggerWhereUniqueInput, {nullable:false})
    @Type(() => TriggerWhereUniqueInput)
    where!: TriggerWhereUniqueInput;

    @Field(() => TriggerCreateWithoutTaskInput, {nullable:false})
    @Type(() => TriggerCreateWithoutTaskInput)
    create!: TriggerCreateWithoutTaskInput;
}
