import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceItemWhereInput } from './resource-item-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyResourceItemArgs {

    @Field(() => ResourceItemWhereInput, {nullable:true})
    @Type(() => ResourceItemWhereInput)
    where?: ResourceItemWhereInput;
}
