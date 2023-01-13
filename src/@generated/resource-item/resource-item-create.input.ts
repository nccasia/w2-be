import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceCreateNestedOneWithoutResourceItemsInput } from '../resource/resource-create-nested-one-without-resource-items.input';

@InputType()
export class ResourceItemCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ResourceCreateNestedOneWithoutResourceItemsInput, {nullable:false})
    resource!: ResourceCreateNestedOneWithoutResourceItemsInput;
}
