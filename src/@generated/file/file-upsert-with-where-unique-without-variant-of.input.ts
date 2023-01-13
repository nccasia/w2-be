import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutVariantOfInput } from './file-update-without-variant-of.input';
import { FileCreateWithoutVariantOfInput } from './file-create-without-variant-of.input';

@InputType()
export class FileUpsertWithWhereUniqueWithoutVariantOfInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutVariantOfInput, {nullable:false})
    @Type(() => FileUpdateWithoutVariantOfInput)
    update!: FileUpdateWithoutVariantOfInput;

    @Field(() => FileCreateWithoutVariantOfInput, {nullable:false})
    @Type(() => FileCreateWithoutVariantOfInput)
    create!: FileCreateWithoutVariantOfInput;
}
