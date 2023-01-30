import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutProjectsInput } from './task-definition-create-without-projects.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutProjectsInput } from './task-definition-create-or-connect-without-projects.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionCreateNestedOneWithoutProjectsInput {

    @Field(() => TaskDefinitionCreateWithoutProjectsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutProjectsInput)
    create?: TaskDefinitionCreateWithoutProjectsInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutProjectsInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;
}
