import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceItemUpdateManyMutationInput } from './resource-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ResourceItemWhereInput } from './resource-item-where.input';

@ArgsType()
export class UpdateManyResourceItemArgs {

    @Field(() => ResourceItemUpdateManyMutationInput, {nullable:false})
    @Type(() => ResourceItemUpdateManyMutationInput)
    data!: ResourceItemUpdateManyMutationInput;

    @Field(() => ResourceItemWhereInput, {nullable:true})
    @Type(() => ResourceItemWhereInput)
    where?: ResourceItemWhereInput;
}
