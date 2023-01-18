import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCreateManyInput } from './task-definition-activity-definition-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTaskDefinitionActivityDefinitionArgs {

    @Field(() => [TaskDefinitionActivityDefinitionCreateManyInput], {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionCreateManyInput)
    data!: Array<TaskDefinitionActivityDefinitionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
