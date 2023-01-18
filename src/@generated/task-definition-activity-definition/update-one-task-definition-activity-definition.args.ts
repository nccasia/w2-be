import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionUpdateInput } from './task-definition-activity-definition-update.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';

@ArgsType()
export class UpdateOneTaskDefinitionActivityDefinitionArgs {

    @Field(() => TaskDefinitionActivityDefinitionUpdateInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionUpdateInput)
    data!: TaskDefinitionActivityDefinitionUpdateInput;

    @Field(() => TaskDefinitionActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    where!: TaskDefinitionActivityDefinitionWhereUniqueInput;
}
