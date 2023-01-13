import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceItemCreateWithoutResourceInput } from './resource-item-create-without-resource.input';
import { Type } from 'class-transformer';
import { ResourceItemCreateOrConnectWithoutResourceInput } from './resource-item-create-or-connect-without-resource.input';
import { ResourceItemUpsertWithWhereUniqueWithoutResourceInput } from './resource-item-upsert-with-where-unique-without-resource.input';
import { ResourceItemCreateManyResourceInputEnvelope } from './resource-item-create-many-resource-input-envelope.input';
import { ResourceItemWhereUniqueInput } from './resource-item-where-unique.input';
import { ResourceItemUpdateWithWhereUniqueWithoutResourceInput } from './resource-item-update-with-where-unique-without-resource.input';
import { ResourceItemUpdateManyWithWhereWithoutResourceInput } from './resource-item-update-many-with-where-without-resource.input';
import { ResourceItemScalarWhereInput } from './resource-item-scalar-where.input';

@InputType()
export class ResourceItemUpdateManyWithoutResourceNestedInput {

    @Field(() => [ResourceItemCreateWithoutResourceInput], {nullable:true})
    @Type(() => ResourceItemCreateWithoutResourceInput)
    create?: Array<ResourceItemCreateWithoutResourceInput>;

    @Field(() => [ResourceItemCreateOrConnectWithoutResourceInput], {nullable:true})
    @Type(() => ResourceItemCreateOrConnectWithoutResourceInput)
    connectOrCreate?: Array<ResourceItemCreateOrConnectWithoutResourceInput>;

    @Field(() => [ResourceItemUpsertWithWhereUniqueWithoutResourceInput], {nullable:true})
    @Type(() => ResourceItemUpsertWithWhereUniqueWithoutResourceInput)
    upsert?: Array<ResourceItemUpsertWithWhereUniqueWithoutResourceInput>;

    @Field(() => ResourceItemCreateManyResourceInputEnvelope, {nullable:true})
    @Type(() => ResourceItemCreateManyResourceInputEnvelope)
    createMany?: ResourceItemCreateManyResourceInputEnvelope;

    @Field(() => [ResourceItemWhereUniqueInput], {nullable:true})
    @Type(() => ResourceItemWhereUniqueInput)
    set?: Array<ResourceItemWhereUniqueInput>;

    @Field(() => [ResourceItemWhereUniqueInput], {nullable:true})
    @Type(() => ResourceItemWhereUniqueInput)
    disconnect?: Array<ResourceItemWhereUniqueInput>;

    @Field(() => [ResourceItemWhereUniqueInput], {nullable:true})
    @Type(() => ResourceItemWhereUniqueInput)
    delete?: Array<ResourceItemWhereUniqueInput>;

    @Field(() => [ResourceItemWhereUniqueInput], {nullable:true})
    @Type(() => ResourceItemWhereUniqueInput)
    connect?: Array<ResourceItemWhereUniqueInput>;

    @Field(() => [ResourceItemUpdateWithWhereUniqueWithoutResourceInput], {nullable:true})
    @Type(() => ResourceItemUpdateWithWhereUniqueWithoutResourceInput)
    update?: Array<ResourceItemUpdateWithWhereUniqueWithoutResourceInput>;

    @Field(() => [ResourceItemUpdateManyWithWhereWithoutResourceInput], {nullable:true})
    @Type(() => ResourceItemUpdateManyWithWhereWithoutResourceInput)
    updateMany?: Array<ResourceItemUpdateManyWithWhereWithoutResourceInput>;

    @Field(() => [ResourceItemScalarWhereInput], {nullable:true})
    @Type(() => ResourceItemScalarWhereInput)
    deleteMany?: Array<ResourceItemScalarWhereInput>;
}
