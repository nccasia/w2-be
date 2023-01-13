import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceWhereInput } from './resource-where.input';

@InputType()
export class ResourceRelationFilter {

    @Field(() => ResourceWhereInput, {nullable:true})
    is?: ResourceWhereInput;

    @Field(() => ResourceWhereInput, {nullable:true})
    isNot?: ResourceWhereInput;
}
