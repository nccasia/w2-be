import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceItemCreateInput } from './resource-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneResourceItemArgs {

    @Field(() => ResourceItemCreateInput, {nullable:false})
    @Type(() => ResourceItemCreateInput)
    data!: ResourceItemCreateInput;
}
