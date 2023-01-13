import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TriggerUpdateInput } from './trigger-update.input';
import { Type } from 'class-transformer';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';

@ArgsType()
export class UpdateOneTriggerArgs {

    @Field(() => TriggerUpdateInput, {nullable:false})
    @Type(() => TriggerUpdateInput)
    data!: TriggerUpdateInput;

    @Field(() => TriggerWhereUniqueInput, {nullable:false})
    @Type(() => TriggerWhereUniqueInput)
    where!: TriggerWhereUniqueInput;
}
