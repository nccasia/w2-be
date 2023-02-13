import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PermissionUpdateOneRequiredWithoutUserPermissionsNestedInput } from '../permission/permission-update-one-required-without-user-permissions-nested.input';
import { UserUpdateOneRequiredWithoutUserPermissionsNestedInput } from '../user/user-update-one-required-without-user-permissions-nested.input';

@InputType()
export class UserPermissionUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PermissionUpdateOneRequiredWithoutUserPermissionsNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutUserPermissionsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUserPermissionsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserPermissionsNestedInput;
}
