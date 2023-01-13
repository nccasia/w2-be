import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateNestedOneWithoutResourcesInput } from '../organization/organization-create-nested-one-without-resources.input';
import { ResourceItemCreateNestedManyWithoutResourceInput } from '../resource-item/resource-item-create-nested-many-without-resource.input';

@InputType()
export class ResourceCreateInput {

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

    @Field(() => OrganizationCreateNestedOneWithoutResourcesInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutResourcesInput;

    @Field(() => ResourceItemCreateNestedManyWithoutResourceInput, {nullable:true})
    resourceItems?: ResourceItemCreateNestedManyWithoutResourceInput;
}
