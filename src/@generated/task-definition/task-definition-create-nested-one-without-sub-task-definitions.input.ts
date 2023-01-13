import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutSubTaskDefinitionsInput } from './task-definition-create-without-sub-task-definitions.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutSubTaskDefinitionsInput } from './task-definition-create-or-connect-without-sub-task-definitions.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionCreateNestedOneWithoutSubTaskDefinitionsInput {

    @Field(() => TaskDefinitionCreateWithoutSubTaskDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutSubTaskDefinitionsInput)
    create?: TaskDefinitionCreateWithoutSubTaskDefinitionsInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutSubTaskDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutSubTaskDefinitionsInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutSubTaskDefinitionsInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;
}
