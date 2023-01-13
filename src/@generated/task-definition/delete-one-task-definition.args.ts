import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneTaskDefinitionArgs {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;
}
