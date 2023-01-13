import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceUpdateWithoutResourceItemsInput } from './resource-update-without-resource-items.input';
import { Type } from 'class-transformer';
import { ResourceCreateWithoutResourceItemsInput } from './resource-create-without-resource-items.input';

@InputType()
export class ResourceUpsertWithoutResourceItemsInput {

    @Field(() => ResourceUpdateWithoutResourceItemsInput, {nullable:false})
    @Type(() => ResourceUpdateWithoutResourceItemsInput)
    update!: ResourceUpdateWithoutResourceItemsInput;

    @Field(() => ResourceCreateWithoutResourceItemsInput, {nullable:false})
    @Type(() => ResourceCreateWithoutResourceItemsInput)
    create!: ResourceCreateWithoutResourceItemsInput;
}
