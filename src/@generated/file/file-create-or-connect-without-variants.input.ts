import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutVariantsInput } from './file-create-without-variants.input';

@InputType()
export class FileCreateOrConnectWithoutVariantsInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutVariantsInput, {nullable:false})
    @Type(() => FileCreateWithoutVariantsInput)
    create!: FileCreateWithoutVariantsInput;
}
