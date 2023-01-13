import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActionUpdateManyMutationInput } from './action-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ActionWhereInput } from './action-where.input';

@ArgsType()
export class UpdateManyActionArgs {

    @Field(() => ActionUpdateManyMutationInput, {nullable:false})
    @Type(() => ActionUpdateManyMutationInput)
    data!: ActionUpdateManyMutationInput;

    @Field(() => ActionWhereInput, {nullable:true})
    @Type(() => ActionWhereInput)
    where?: ActionWhereInput;
}
