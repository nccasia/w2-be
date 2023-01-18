import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereInput } from './task-definition-activity-definition-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTaskDefinitionActivityDefinitionArgs {

    @Field(() => TaskDefinitionActivityDefinitionWhereInput, {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionWhereInput)
    where?: TaskDefinitionActivityDefinitionWhereInput;
}
