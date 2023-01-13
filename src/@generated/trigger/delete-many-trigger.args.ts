import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TriggerWhereInput } from './trigger-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTriggerArgs {

    @Field(() => TriggerWhereInput, {nullable:true})
    @Type(() => TriggerWhereInput)
    where?: TriggerWhereInput;
}
