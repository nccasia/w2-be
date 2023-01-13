import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutVariantsInput } from './file-create-without-variants.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutVariantsInput } from './file-create-or-connect-without-variants.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutVariantsInput {

    @Field(() => FileCreateWithoutVariantsInput, {nullable:true})
    @Type(() => FileCreateWithoutVariantsInput)
    create?: FileCreateWithoutVariantsInput;

    @Field(() => FileCreateOrConnectWithoutVariantsInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutVariantsInput)
    connectOrCreate?: FileCreateOrConnectWithoutVariantsInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: FileWhereUniqueInput;
}
