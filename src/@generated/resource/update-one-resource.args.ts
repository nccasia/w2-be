import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceUpdateInput } from './resource-update.input';
import { Type } from 'class-transformer';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';

@ArgsType()
export class UpdateOneResourceArgs {

    @Field(() => ResourceUpdateInput, {nullable:false})
    @Type(() => ResourceUpdateInput)
    data!: ResourceUpdateInput;

    @Field(() => ResourceWhereUniqueInput, {nullable:false})
    @Type(() => ResourceWhereUniqueInput)
    where!: ResourceWhereUniqueInput;
}
