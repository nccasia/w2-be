import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TriggerCreateManyInput } from './trigger-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTriggerArgs {

    @Field(() => [TriggerCreateManyInput], {nullable:false})
    @Type(() => TriggerCreateManyInput)
    data!: Array<TriggerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
