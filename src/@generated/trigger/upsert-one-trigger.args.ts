import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { Type } from 'class-transformer';
import { TriggerCreateInput } from './trigger-create.input';
import { TriggerUpdateInput } from './trigger-update.input';

@ArgsType()
export class UpsertOneTriggerArgs {

    @Field(() => TriggerWhereUniqueInput, {nullable:false})
    @Type(() => TriggerWhereUniqueInput)
    where!: TriggerWhereUniqueInput;

    @Field(() => TriggerCreateInput, {nullable:false})
    @Type(() => TriggerCreateInput)
    create!: TriggerCreateInput;

    @Field(() => TriggerUpdateInput, {nullable:false})
    @Type(() => TriggerUpdateInput)
    update!: TriggerUpdateInput;
}
