import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceItemCreateWithoutResourceInput } from './resource-item-create-without-resource.input';
import { Type } from 'class-transformer';
import { ResourceItemCreateOrConnectWithoutResourceInput } from './resource-item-create-or-connect-without-resource.input';
import { ResourceItemCreateManyResourceInputEnvelope } from './resource-item-create-many-resource-input-envelope.input';
import { ResourceItemWhereUniqueInput } from './resource-item-where-unique.input';

@InputType()
export class ResourceItemUncheckedCreateNestedManyWithoutResourceInput {

    @Field(() => [ResourceItemCreateWithoutResourceInput], {nullable:true})
    @Type(() => ResourceItemCreateWithoutResourceInput)
    create?: Array<ResourceItemCreateWithoutResourceInput>;

    @Field(() => [ResourceItemCreateOrConnectWithoutResourceInput], {nullable:true})
    @Type(() => ResourceItemCreateOrConnectWithoutResourceInput)
    connectOrCreate?: Array<ResourceItemCreateOrConnectWithoutResourceInput>;

    @Field(() => ResourceItemCreateManyResourceInputEnvelope, {nullable:true})
    @Type(() => ResourceItemCreateManyResourceInputEnvelope)
    createMany?: ResourceItemCreateManyResourceInputEnvelope;

    @Field(() => [ResourceItemWhereUniqueInput], {nullable:true})
    @Type(() => ResourceItemWhereUniqueInput)
    connect?: Array<ResourceItemWhereUniqueInput>;
}
