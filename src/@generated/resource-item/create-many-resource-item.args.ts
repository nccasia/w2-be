import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceItemCreateManyInput } from './resource-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyResourceItemArgs {

    @Field(() => [ResourceItemCreateManyInput], {nullable:false})
    @Type(() => ResourceItemCreateManyInput)
    data!: Array<ResourceItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
