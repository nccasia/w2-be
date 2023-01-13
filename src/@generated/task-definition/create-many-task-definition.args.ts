import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionCreateManyInput } from './task-definition-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTaskDefinitionArgs {

    @Field(() => [TaskDefinitionCreateManyInput], {nullable:false})
    @Type(() => TaskDefinitionCreateManyInput)
    data!: Array<TaskDefinitionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
