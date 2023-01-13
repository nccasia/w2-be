import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateInput } from './task-definition-create.input';
import { TaskDefinitionUpdateInput } from './task-definition-update.input';

@ArgsType()
export class UpsertOneTaskDefinitionArgs {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateInput, {nullable:false})
    @Type(() => TaskDefinitionCreateInput)
    create!: TaskDefinitionCreateInput;

    @Field(() => TaskDefinitionUpdateInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateInput)
    update!: TaskDefinitionUpdateInput;
}
