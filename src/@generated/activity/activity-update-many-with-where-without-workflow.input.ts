import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityScalarWhereInput } from './activity-scalar-where.input';
import { Type } from 'class-transformer';
import { ActivityUpdateManyMutationInput } from './activity-update-many-mutation.input';

@InputType()
export class ActivityUpdateManyWithWhereWithoutWorkflowInput {

    @Field(() => ActivityScalarWhereInput, {nullable:false})
    @Type(() => ActivityScalarWhereInput)
    where!: ActivityScalarWhereInput;

    @Field(() => ActivityUpdateManyMutationInput, {nullable:false})
    @Type(() => ActivityUpdateManyMutationInput)
    data!: ActivityUpdateManyMutationInput;
}
