import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutTaskInstancesInput } from './task-definition-create-without-task-instances.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutTaskInstancesInput } from './task-definition-create-or-connect-without-task-instances.input';
import { TaskDefinitionUpsertWithoutTaskInstancesInput } from './task-definition-upsert-without-task-instances.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithoutTaskInstancesInput } from './task-definition-update-without-task-instances.input';

@InputType()
export class TaskDefinitionUpdateOneRequiredWithoutTaskInstancesNestedInput {

    @Field(() => TaskDefinitionCreateWithoutTaskInstancesInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutTaskInstancesInput)
    create?: TaskDefinitionCreateWithoutTaskInstancesInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutTaskInstancesInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutTaskInstancesInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutTaskInstancesInput;

    @Field(() => TaskDefinitionUpsertWithoutTaskInstancesInput, {nullable:true})
    @Type(() => TaskDefinitionUpsertWithoutTaskInstancesInput)
    upsert?: TaskDefinitionUpsertWithoutTaskInstancesInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutTaskInstancesInput, {nullable:true})
    @Type(() => TaskDefinitionUpdateWithoutTaskInstancesInput)
    update?: TaskDefinitionUpdateWithoutTaskInstancesInput;
}
