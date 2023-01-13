import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceItemUpdateInput } from './resource-item-update.input';
import { Type } from 'class-transformer';
import { ResourceItemWhereUniqueInput } from './resource-item-where-unique.input';

@ArgsType()
export class UpdateOneResourceItemArgs {

    @Field(() => ResourceItemUpdateInput, {nullable:false})
    @Type(() => ResourceItemUpdateInput)
    data!: ResourceItemUpdateInput;

    @Field(() => ResourceItemWhereUniqueInput, {nullable:false})
    @Type(() => ResourceItemWhereUniqueInput)
    where!: ResourceItemWhereUniqueInput;
}
