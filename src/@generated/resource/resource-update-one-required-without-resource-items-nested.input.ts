import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceCreateWithoutResourceItemsInput } from './resource-create-without-resource-items.input';
import { Type } from 'class-transformer';
import { ResourceCreateOrConnectWithoutResourceItemsInput } from './resource-create-or-connect-without-resource-items.input';
import { ResourceUpsertWithoutResourceItemsInput } from './resource-upsert-without-resource-items.input';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { ResourceUpdateWithoutResourceItemsInput } from './resource-update-without-resource-items.input';

@InputType()
export class ResourceUpdateOneRequiredWithoutResourceItemsNestedInput {

    @Field(() => ResourceCreateWithoutResourceItemsInput, {nullable:true})
    @Type(() => ResourceCreateWithoutResourceItemsInput)
    create?: ResourceCreateWithoutResourceItemsInput;

    @Field(() => ResourceCreateOrConnectWithoutResourceItemsInput, {nullable:true})
    @Type(() => ResourceCreateOrConnectWithoutResourceItemsInput)
    connectOrCreate?: ResourceCreateOrConnectWithoutResourceItemsInput;

    @Field(() => ResourceUpsertWithoutResourceItemsInput, {nullable:true})
    @Type(() => ResourceUpsertWithoutResourceItemsInput)
    upsert?: ResourceUpsertWithoutResourceItemsInput;

    @Field(() => ResourceWhereUniqueInput, {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    connect?: ResourceWhereUniqueInput;

    @Field(() => ResourceUpdateWithoutResourceItemsInput, {nullable:true})
    @Type(() => ResourceUpdateWithoutResourceItemsInput)
    update?: ResourceUpdateWithoutResourceItemsInput;
}
