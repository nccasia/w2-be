import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ResourceItemUncheckedCreateNestedManyWithoutResourceInput } from '../resource-item/resource-item-unchecked-create-nested-many-without-resource.input';

@InputType()
export class ResourceUncheckedCreateWithoutOrganizationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => ResourceItemUncheckedCreateNestedManyWithoutResourceInput, {nullable:true})
    resourceItems?: ResourceItemUncheckedCreateNestedManyWithoutResourceInput;
}
