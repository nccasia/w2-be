import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceCreateWithoutResourceItemsInput } from './resource-create-without-resource-items.input';
import { Type } from 'class-transformer';
import { ResourceCreateOrConnectWithoutResourceItemsInput } from './resource-create-or-connect-without-resource-items.input';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';

@InputType()
export class ResourceCreateNestedOneWithoutResourceItemsInput {

    @Field(() => ResourceCreateWithoutResourceItemsInput, {nullable:true})
    @Type(() => ResourceCreateWithoutResourceItemsInput)
    create?: ResourceCreateWithoutResourceItemsInput;

    @Field(() => ResourceCreateOrConnectWithoutResourceItemsInput, {nullable:true})
    @Type(() => ResourceCreateOrConnectWithoutResourceItemsInput)
    connectOrCreate?: ResourceCreateOrConnectWithoutResourceItemsInput;

    @Field(() => ResourceWhereUniqueInput, {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    connect?: ResourceWhereUniqueInput;
}
