import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceItemWhereUniqueInput } from './resource-item-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceItemCreateWithoutResourceInput } from './resource-item-create-without-resource.input';

@InputType()
export class ResourceItemCreateOrConnectWithoutResourceInput {

    @Field(() => ResourceItemWhereUniqueInput, {nullable:false})
    @Type(() => ResourceItemWhereUniqueInput)
    where!: ResourceItemWhereUniqueInput;

    @Field(() => ResourceItemCreateWithoutResourceInput, {nullable:false})
    @Type(() => ResourceItemCreateWithoutResourceInput)
    create!: ResourceItemCreateWithoutResourceInput;
}
