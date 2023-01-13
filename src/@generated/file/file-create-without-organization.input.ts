import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { FileCreateNestedOneWithoutVariantsInput } from './file-create-nested-one-without-variants.input';
import { FileCreateNestedManyWithoutVariantOfInput } from './file-create-nested-many-without-variant-of.input';
import { UserCreateNestedManyWithoutAvatarInput } from '../user/user-create-nested-many-without-avatar.input';

@InputType()
export class FileCreateWithoutOrganizationInput {

    @Field(() => String, {nullable:false})
    filename!: string;

    @Field(() => FileType, {nullable:false})
    fileType!: keyof typeof FileType;

    @Field(() => String, {nullable:false})
    mimetype!: string;

    @Field(() => String, {nullable:false})
    encoding!: string;

    @Field(() => String, {nullable:false})
    data!: string;

    @Field(() => String, {nullable:false})
    cdnUrl!: string;

    @Field(() => String, {nullable:true})
    varantName?: string;

    @Field(() => String, {nullable:true})
    variantKey?: string;

    @Field(() => String, {nullable:true})
    variantValue?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedOneWithoutVariantsInput, {nullable:true})
    variantOf?: FileCreateNestedOneWithoutVariantsInput;

    @Field(() => FileCreateNestedManyWithoutVariantOfInput, {nullable:true})
    variants?: FileCreateNestedManyWithoutVariantOfInput;

    @Field(() => UserCreateNestedManyWithoutAvatarInput, {nullable:true})
    avatarUsers?: UserCreateNestedManyWithoutAvatarInput;
}
