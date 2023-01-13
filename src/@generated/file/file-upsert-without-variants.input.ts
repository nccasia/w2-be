import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutVariantsInput } from './file-update-without-variants.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutVariantsInput } from './file-create-without-variants.input';

@InputType()
export class FileUpsertWithoutVariantsInput {

    @Field(() => FileUpdateWithoutVariantsInput, {nullable:false})
    @Type(() => FileUpdateWithoutVariantsInput)
    update!: FileUpdateWithoutVariantsInput;

    @Field(() => FileCreateWithoutVariantsInput, {nullable:false})
    @Type(() => FileCreateWithoutVariantsInput)
    create!: FileCreateWithoutVariantsInput;
}
