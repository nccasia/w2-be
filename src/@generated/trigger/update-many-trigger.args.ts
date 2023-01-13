import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TriggerUpdateManyMutationInput } from './trigger-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TriggerWhereInput } from './trigger-where.input';

@ArgsType()
export class UpdateManyTriggerArgs {

    @Field(() => TriggerUpdateManyMutationInput, {nullable:false})
    @Type(() => TriggerUpdateManyMutationInput)
    data!: TriggerUpdateManyMutationInput;

    @Field(() => TriggerWhereInput, {nullable:true})
    @Type(() => TriggerWhereInput)
    where?: TriggerWhereInput;
}
