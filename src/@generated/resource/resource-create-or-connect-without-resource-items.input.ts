import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceCreateWithoutResourceItemsInput } from './resource-create-without-resource-items.input';

@InputType()
export class ResourceCreateOrConnectWithoutResourceItemsInput {

    @Field(() => ResourceWhereUniqueInput, {nullable:false})
    @Type(() => ResourceWhereUniqueInput)
    where!: ResourceWhereUniqueInput;

    @Field(() => ResourceCreateWithoutResourceItemsInput, {nullable:false})
    @Type(() => ResourceCreateWithoutResourceItemsInput)
    create!: ResourceCreateWithoutResourceItemsInput;
}
