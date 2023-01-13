import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyVariantOfInput } from './file-create-many-variant-of.input';
import { Type } from 'class-transformer';

@InputType()
export class FileCreateManyVariantOfInputEnvelope {

    @Field(() => [FileCreateManyVariantOfInput], {nullable:false})
    @Type(() => FileCreateManyVariantOfInput)
    data!: Array<FileCreateManyVariantOfInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
