import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceItemWhereUniqueInput } from './resource-item-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueResourceItemArgs {

    @Field(() => ResourceItemWhereUniqueInput, {nullable:false})
    @Type(() => ResourceItemWhereUniqueInput)
    where!: ResourceItemWhereUniqueInput;
}
