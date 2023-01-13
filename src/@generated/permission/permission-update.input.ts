import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrganizationUpdateOneRequiredWithoutPermissionsNestedInput } from '../organization/organization-update-one-required-without-permissions-nested.input';
import { PermissionGroupUpdateOneRequiredWithoutPermissionsNestedInput } from '../permission-group/permission-group-update-one-required-without-permissions-nested.input';
import { UserPermissionUpdateManyWithoutPermissionNestedInput } from '../user-permission/user-permission-update-many-without-permission-nested.input';

@InputType()
export class PermissionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutPermissionsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutPermissionsNestedInput;

    @Field(() => PermissionGroupUpdateOneRequiredWithoutPermissionsNestedInput, {nullable:true})
    permissionGroup?: PermissionGroupUpdateOneRequiredWithoutPermissionsNestedInput;

    @Field(() => UserPermissionUpdateManyWithoutPermissionNestedInput, {nullable:true})
    userPermissions?: UserPermissionUpdateManyWithoutPermissionNestedInput;
}
