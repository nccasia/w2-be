import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutUserPermissionsNestedInput } from '../user/user-update-one-required-without-user-permissions-nested.input';

@InputType()
export class UserPermissionUpdateWithoutPermissionInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutUserPermissionsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserPermissionsNestedInput;
}
