import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutSubTaskDefinitionsInput } from './task-definition-create-without-sub-task-definitions.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutSubTaskDefinitionsInput } from './task-definition-create-or-connect-without-sub-task-definitions.input';
import { TaskDefinitionUpsertWithoutSubTaskDefinitionsInput } from './task-definition-upsert-without-sub-task-definitions.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithoutSubTaskDefinitionsInput } from './task-definition-update-without-sub-task-definitions.input';

@InputType()
export class TaskDefinitionUpdateOneWithoutSubTaskDefinitionsNestedInput {

    @Field(() => TaskDefinitionCreateWithoutSubTaskDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutSubTaskDefinitionsInput)
    create?: TaskDefinitionCreateWithoutSubTaskDefinitionsInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutSubTaskDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutSubTaskDefinitionsInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutSubTaskDefinitionsInput;

    @Field(() => TaskDefinitionUpsertWithoutSubTaskDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionUpsertWithoutSubTaskDefinitionsInput)
    upsert?: TaskDefinitionUpsertWithoutSubTaskDefinitionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutSubTaskDefinitionsInput, {nullable:true})
    @Type(() => TaskDefinitionUpdateWithoutSubTaskDefinitionsInput)
    update?: TaskDefinitionUpdateWithoutSubTaskDefinitionsInput;
}
