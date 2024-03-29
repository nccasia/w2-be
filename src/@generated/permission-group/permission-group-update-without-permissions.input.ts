import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrganizationUpdateOneRequiredWithoutPermissionGroupsNestedInput } from '../organization/organization-update-one-required-without-permission-groups-nested.input';

@InputType()
export class PermissionGroupUpdateWithoutPermissionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutPermissionGroupsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutPermissionGroupsNestedInput;
}
