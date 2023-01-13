import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { FileUncheckedCreateNestedManyWithoutVariantOfInput } from './file-unchecked-create-nested-many-without-variant-of.input';

@InputType()
export class FileUncheckedCreateWithoutAvatarUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    variantOfId?: number;

    @Field(() => FileUncheckedCreateNestedManyWithoutVariantOfInput, {nullable:true})
    variants?: FileUncheckedCreateNestedManyWithoutVariantOfInput;

    @Field(() => Int, {nullable:false})
    organizationId!: number;
}
