import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceItemScalarWhereInput } from './resource-item-scalar-where.input';
import { Type } from 'class-transformer';
import { ResourceItemUpdateManyMutationInput } from './resource-item-update-many-mutation.input';

@InputType()
export class ResourceItemUpdateManyWithWhereWithoutResourceInput {

    @Field(() => ResourceItemScalarWhereInput, {nullable:false})
    @Type(() => ResourceItemScalarWhereInput)
    where!: ResourceItemScalarWhereInput;

    @Field(() => ResourceItemUpdateManyMutationInput, {nullable:false})
    @Type(() => ResourceItemUpdateManyMutationInput)
    data!: ResourceItemUpdateManyMutationInput;
}
