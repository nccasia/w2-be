import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PermissionUpdateOneRequiredWithoutUserPermissionsNestedInput } from '../permission/permission-update-one-required-without-user-permissions-nested.input';

@InputType()
export class UserPermissionUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PermissionUpdateOneRequiredWithoutUserPermissionsNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutUserPermissionsNestedInput;
}
