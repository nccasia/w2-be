import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumFileTypeFieldUpdateOperationsInput } from '../prisma/enum-file-type-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutVariantsNestedInput } from './file-update-one-without-variants-nested.input';
import { FileUpdateManyWithoutVariantOfNestedInput } from './file-update-many-without-variant-of-nested.input';
import { OrganizationUpdateOneRequiredWithoutFilesNestedInput } from '../organization/organization-update-one-required-without-files-nested.input';

@InputType()
export class FileUpdateWithoutAvatarUsersInput {

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

    @Field(() => FileUpdateOneWithoutVariantsNestedInput, {nullable:true})
    variantOf?: FileUpdateOneWithoutVariantsNestedInput;

    @Field(() => FileUpdateManyWithoutVariantOfNestedInput, {nullable:true})
    variants?: FileUpdateManyWithoutVariantOfNestedInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutFilesNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutFilesNestedInput;
}
