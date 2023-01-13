import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TriggerCreateInput } from './trigger-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTriggerArgs {

    @Field(() => TriggerCreateInput, {nullable:false})
    @Type(() => TriggerCreateInput)
    data!: TriggerCreateInput;
}
