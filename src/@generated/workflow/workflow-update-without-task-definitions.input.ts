import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { OrganizationUpdateOneRequiredWithoutWorkflowsNestedInput } from '../organization/organization-update-one-required-without-workflows-nested.input';
import { ActivityUpdateManyWithoutWorkflowNestedInput } from '../activity/activity-update-many-without-workflow-nested.input';

@InputType()
export class WorkflowUpdateWithoutTaskDefinitionsInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => OrganizationUpdateOneRequiredWithoutWorkflowsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutWorkflowsNestedInput;

    @Field(() => ActivityUpdateManyWithoutWorkflowNestedInput, {nullable:true})
    activities?: ActivityUpdateManyWithoutWorkflowNestedInput;
}
