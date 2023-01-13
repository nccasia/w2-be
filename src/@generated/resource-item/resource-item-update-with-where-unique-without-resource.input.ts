import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceItemWhereUniqueInput } from './resource-item-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceItemUpdateWithoutResourceInput } from './resource-item-update-without-resource.input';

@InputType()
export class ResourceItemUpdateWithWhereUniqueWithoutResourceInput {

    @Field(() => ResourceItemWhereUniqueInput, {nullable:false})
    @Type(() => ResourceItemWhereUniqueInput)
    where!: ResourceItemWhereUniqueInput;

    @Field(() => ResourceItemUpdateWithoutResourceInput, {nullable:false})
    @Type(() => ResourceItemUpdateWithoutResourceInput)
    data!: ResourceItemUpdateWithoutResourceInput;
}
