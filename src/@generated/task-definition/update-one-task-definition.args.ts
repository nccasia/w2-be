import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionUpdateInput } from './task-definition-update.input';
import { Type } from 'class-transformer';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@ArgsType()
export class UpdateOneTaskDefinitionArgs {

    @Field(() => TaskDefinitionUpdateInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateInput)
    data!: TaskDefinitionUpdateInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;
}
