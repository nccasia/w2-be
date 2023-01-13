import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionUpdateManyMutationInput } from './task-definition-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TaskDefinitionWhereInput } from './task-definition-where.input';

@ArgsType()
export class UpdateManyTaskDefinitionArgs {

    @Field(() => TaskDefinitionUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateManyMutationInput)
    data!: TaskDefinitionUpdateManyMutationInput;

    @Field(() => TaskDefinitionWhereInput, {nullable:true})
    @Type(() => TaskDefinitionWhereInput)
    where?: TaskDefinitionWhereInput;
}
