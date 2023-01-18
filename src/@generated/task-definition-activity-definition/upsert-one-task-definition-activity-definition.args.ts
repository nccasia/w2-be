import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionCreateInput } from './task-definition-activity-definition-create.input';
import { TaskDefinitionActivityDefinitionUpdateInput } from './task-definition-activity-definition-update.input';

@ArgsType()
export class UpsertOneTaskDefinitionActivityDefinitionArgs {

    @Field(() => TaskDefinitionActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    where!: TaskDefinitionActivityDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionActivityDefinitionCreateInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionCreateInput)
    create!: TaskDefinitionActivityDefinitionCreateInput;

    @Field(() => TaskDefinitionActivityDefinitionUpdateInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionUpdateInput)
    update!: TaskDefinitionActivityDefinitionUpdateInput;
}
