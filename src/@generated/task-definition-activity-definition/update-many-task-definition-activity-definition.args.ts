import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionUpdateManyMutationInput } from './task-definition-activity-definition-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionWhereInput } from './task-definition-activity-definition-where.input';

@ArgsType()
export class UpdateManyTaskDefinitionActivityDefinitionArgs {

    @Field(() => TaskDefinitionActivityDefinitionUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionUpdateManyMutationInput)
    data!: TaskDefinitionActivityDefinitionUpdateManyMutationInput;

    @Field(() => TaskDefinitionActivityDefinitionWhereInput, {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionWhereInput)
    where?: TaskDefinitionActivityDefinitionWhereInput;
}
