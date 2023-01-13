import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutActivitiesInput } from './workflow-create-without-activities.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutActivitiesInput } from './workflow-create-or-connect-without-activities.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';

@InputType()
export class WorkflowCreateNestedOneWithoutActivitiesInput {

    @Field(() => WorkflowCreateWithoutActivitiesInput, {nullable:true})
    @Type(() => WorkflowCreateWithoutActivitiesInput)
    create?: WorkflowCreateWithoutActivitiesInput;

    @Field(() => WorkflowCreateOrConnectWithoutActivitiesInput, {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutActivitiesInput)
    connectOrCreate?: WorkflowCreateOrConnectWithoutActivitiesInput;

    @Field(() => WorkflowWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: WorkflowWhereUniqueInput;
}
