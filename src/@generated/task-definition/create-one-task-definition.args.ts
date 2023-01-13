import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionCreateInput } from './task-definition-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTaskDefinitionArgs {

    @Field(() => TaskDefinitionCreateInput, {nullable:false})
    @Type(() => TaskDefinitionCreateInput)
    data!: TaskDefinitionCreateInput;
}
