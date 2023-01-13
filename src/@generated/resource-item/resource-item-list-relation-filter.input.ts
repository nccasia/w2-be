import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceItemWhereInput } from './resource-item-where.input';

@InputType()
export class ResourceItemListRelationFilter {

    @Field(() => ResourceItemWhereInput, {nullable:true})
    every?: ResourceItemWhereInput;

    @Field(() => ResourceItemWhereInput, {nullable:true})
    some?: ResourceItemWhereInput;

    @Field(() => ResourceItemWhereInput, {nullable:true})
    none?: ResourceItemWhereInput;
}
