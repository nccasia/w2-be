import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutActivitiesInput } from './workflow-create-without-activities.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutActivitiesInput } from './workflow-create-or-connect-without-activities.input';
import { WorkflowUpsertWithoutActivitiesInput } from './workflow-upsert-without-activities.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { WorkflowUpdateWithoutActivitiesInput } from './workflow-update-without-activities.input';

@InputType()
export class WorkflowUpdateOneRequiredWithoutActivitiesNestedInput {

    @Field(() => WorkflowCreateWithoutActivitiesInput, {nullable:true})
    @Type(() => WorkflowCreateWithoutActivitiesInput)
    create?: WorkflowCreateWithoutActivitiesInput;

    @Field(() => WorkflowCreateOrConnectWithoutActivitiesInput, {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutActivitiesInput)
    connectOrCreate?: WorkflowCreateOrConnectWithoutActivitiesInput;

    @Field(() => WorkflowUpsertWithoutActivitiesInput, {nullable:true})
    @Type(() => WorkflowUpsertWithoutActivitiesInput)
    upsert?: WorkflowUpsertWithoutActivitiesInput;

    @Field(() => WorkflowWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: WorkflowWhereUniqueInput;

    @Field(() => WorkflowUpdateWithoutActivitiesInput, {nullable:true})
    @Type(() => WorkflowUpdateWithoutActivitiesInput)
    update?: WorkflowUpdateWithoutActivitiesInput;
}
