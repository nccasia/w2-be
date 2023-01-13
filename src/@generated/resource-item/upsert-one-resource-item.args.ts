import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceItemWhereUniqueInput } from './resource-item-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceItemCreateInput } from './resource-item-create.input';
import { ResourceItemUpdateInput } from './resource-item-update.input';

@ArgsType()
export class UpsertOneResourceItemArgs {

    @Field(() => ResourceItemWhereUniqueInput, {nullable:false})
    @Type(() => ResourceItemWhereUniqueInput)
    where!: ResourceItemWhereUniqueInput;

    @Field(() => ResourceItemCreateInput, {nullable:false})
    @Type(() => ResourceItemCreateInput)
    create!: ResourceItemCreateInput;

    @Field(() => ResourceItemUpdateInput, {nullable:false})
    @Type(() => ResourceItemUpdateInput)
    update!: ResourceItemUpdateInput;
}
