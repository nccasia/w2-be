import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput } from './task-definition-create-without-task-definition-activity-definitions.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput } from './task-definition-create-or-connect-without-task-definition-activity-definitions.input';
import { TaskDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput } from './task-definition-upsert-without-task-definition-activity-definitions.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput } from './task-definition-update-without-task-definition-activity-definitions.input';

@InputType()
export class TaskDefinitionUpdateOneRequiredWithoutTaskDefinitionActivityDefinitionsNestedInput {

    @Field(() => TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput)
    create?: TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => TaskDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput)
    upsert?: TaskDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput)
    update?: TaskDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput;
}
