import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumFileTypeFieldUpdateOperationsInput } from '../prisma/enum-file-type-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { FileUncheckedUpdateManyWithoutVariantOfNestedInput } from './file-unchecked-update-many-without-variant-of-nested.input';
import { UserUncheckedUpdateManyWithoutAvatarNestedInput } from '../user/user-unchecked-update-many-without-avatar-nested.input';

@InputType()
export class FileUncheckedUpdateWithoutOrganizationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    filename?: StringFieldUpdateOperationsInput;

    @Field(() => EnumFileTypeFieldUpdateOperationsInput, {nullable:true})
    fileType?: EnumFileTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    mimetype?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    encoding?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    @Type(() => StringFieldUpdateOperationsInput)
    data?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cdnUrl?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    varantName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    variantKey?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    variantValue?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    variantOfId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => FileUncheckedUpdateManyWithoutVariantOfNestedInput, {nullable:true})
    variants?: FileUncheckedUpdateManyWithoutVariantOfNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutAvatarNestedInput, {nullable:true})
    avatarUsers?: UserUncheckedUpdateManyWithoutAvatarNestedInput;
}
