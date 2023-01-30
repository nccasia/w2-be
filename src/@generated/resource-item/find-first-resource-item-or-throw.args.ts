import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceItemWhereInput } from './resource-item-where.input';
import { Type } from 'class-transformer';
import { ResourceItemOrderByWithRelationInput } from './resource-item-order-by-with-relation.input';
import { ResourceItemWhereUniqueInput } from './resource-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ResourceItemScalarFieldEnum } from './resource-item-scalar-field.enum';

@ArgsType()
export class FindFirstResourceItemOrThrowArgs {

    @Field(() => ResourceItemWhereInput, {nullable:true})
    @Type(() => ResourceItemWhereInput)
    where?: ResourceItemWhereInput;

    @Field(() => [ResourceItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ResourceItemOrderByWithRelationInput>;

    @Field(() => ResourceItemWhereUniqueInput, {nullable:true})
    cursor?: ResourceItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ResourceItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ResourceItemScalarFieldEnum>;
}
