import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceItemWhereUniqueInput } from './resource-item-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceItemUpdateWithoutResourceInput } from './resource-item-update-without-resource.input';
import { ResourceItemCreateWithoutResourceInput } from './resource-item-create-without-resource.input';

@InputType()
export class ResourceItemUpsertWithWhereUniqueWithoutResourceInput {

    @Field(() => ResourceItemWhereUniqueInput, {nullable:false})
    @Type(() => ResourceItemWhereUniqueInput)
    where!: ResourceItemWhereUniqueInput;

    @Field(() => ResourceItemUpdateWithoutResourceInput, {nullable:false})
    @Type(() => ResourceItemUpdateWithoutResourceInput)
    update!: ResourceItemUpdateWithoutResourceInput;

    @Field(() => ResourceItemCreateWithoutResourceInput, {nullable:false})
    @Type(() => ResourceItemCreateWithoutResourceInput)
    create!: ResourceItemCreateWithoutResourceInput;
}
