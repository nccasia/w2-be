import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCreateInput } from './task-definition-activity-definition-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTaskDefinitionActivityDefinitionArgs {

    @Field(() => TaskDefinitionActivityDefinitionCreateInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionCreateInput)
    data!: TaskDefinitionActivityDefinitionCreateInput;
}
