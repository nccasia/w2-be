import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutVariantsInput } from './file-create-without-variants.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutVariantsInput } from './file-create-or-connect-without-variants.input';
import { FileUpsertWithoutVariantsInput } from './file-upsert-without-variants.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutVariantsInput } from './file-update-without-variants.input';

@InputType()
export class FileUpdateOneWithoutVariantsNestedInput {

    @Field(() => FileCreateWithoutVariantsInput, {nullable:true})
    @Type(() => FileCreateWithoutVariantsInput)
    create?: FileCreateWithoutVariantsInput;

    @Field(() => FileCreateOrConnectWithoutVariantsInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutVariantsInput)
    connectOrCreate?: FileCreateOrConnectWithoutVariantsInput;

    @Field(() => FileUpsertWithoutVariantsInput, {nullable:true})
    @Type(() => FileUpsertWithoutVariantsInput)
    upsert?: FileUpsertWithoutVariantsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutVariantsInput, {nullable:true})
    @Type(() => FileUpdateWithoutVariantsInput)
    update?: FileUpdateWithoutVariantsInput;
}
