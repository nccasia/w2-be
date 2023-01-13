import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionWhereInput } from './task-definition-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTaskDefinitionArgs {

    @Field(() => TaskDefinitionWhereInput, {nullable:true})
    @Type(() => TaskDefinitionWhereInput)
    where?: TaskDefinitionWhereInput;
}
