import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutTaskInstancesInput } from './task-definition-create-without-task-instances.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutTaskInstancesInput } from './task-definition-create-or-connect-without-task-instances.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionCreateNestedOneWithoutTaskInstancesInput {

    @Field(() => TaskDefinitionCreateWithoutTaskInstancesInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutTaskInstancesInput)
    create?: TaskDefinitionCreateWithoutTaskInstancesInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutTaskInstancesInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutTaskInstancesInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutTaskInstancesInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;
}
