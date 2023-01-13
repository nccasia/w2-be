import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutVariantOfInput } from './file-create-without-variant-of.input';

@InputType()
export class FileCreateOrConnectWithoutVariantOfInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutVariantOfInput, {nullable:false})
    @Type(() => FileCreateWithoutVariantOfInput)
    create!: FileCreateWithoutVariantOfInput;
}
