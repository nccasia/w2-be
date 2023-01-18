import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput } from './task-definition-create-without-task-definition-activity-definitions.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput } from './task-definition-create-or-connect-without-task-definition-activity-definitions.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionCreateNestedOneWithoutTaskDefinitionActivityDefinitionsInput {

    @Field(() => TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput)
    create?: TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;
}
