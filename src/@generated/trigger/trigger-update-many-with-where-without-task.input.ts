import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerScalarWhereInput } from './trigger-scalar-where.input';
import { Type } from 'class-transformer';
import { TriggerUpdateManyMutationInput } from './trigger-update-many-mutation.input';

@InputType()
export class TriggerUpdateManyWithWhereWithoutTaskInput {

    @Field(() => TriggerScalarWhereInput, {nullable:false})
    @Type(() => TriggerScalarWhereInput)
    where!: TriggerScalarWhereInput;

    @Field(() => TriggerUpdateManyMutationInput, {nullable:false})
    @Type(() => TriggerUpdateManyMutationInput)
    data!: TriggerUpdateManyMutationInput;
}
