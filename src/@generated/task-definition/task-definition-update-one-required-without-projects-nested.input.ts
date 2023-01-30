import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutProjectsInput } from './task-definition-create-without-projects.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutProjectsInput } from './task-definition-create-or-connect-without-projects.input';
import { TaskDefinitionUpsertWithoutProjectsInput } from './task-definition-upsert-without-projects.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithoutProjectsInput } from './task-definition-update-without-projects.input';

@InputType()
export class TaskDefinitionUpdateOneRequiredWithoutProjectsNestedInput {

    @Field(() => TaskDefinitionCreateWithoutProjectsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutProjectsInput)
    create?: TaskDefinitionCreateWithoutProjectsInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutProjectsInput;

    @Field(() => TaskDefinitionUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => TaskDefinitionUpsertWithoutProjectsInput)
    upsert?: TaskDefinitionUpsertWithoutProjectsInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutProjectsInput, {nullable:true})
    @Type(() => TaskDefinitionUpdateWithoutProjectsInput)
    update?: TaskDefinitionUpdateWithoutProjectsInput;
}
