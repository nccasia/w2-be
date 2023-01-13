import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceItemCreateNestedManyWithoutResourceInput } from '../resource-item/resource-item-create-nested-many-without-resource.input';

@InputType()
export class ResourceCreateWithoutOrganizationInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ResourceItemCreateNestedManyWithoutResourceInput, {nullable:true})
    resourceItems?: ResourceItemCreateNestedManyWithoutResourceInput;
}
