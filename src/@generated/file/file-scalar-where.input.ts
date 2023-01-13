import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumFileTypeFilter } from '../prisma/enum-file-type-filter.input';
import { Type } from 'class-transformer';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class FileScalarWhereInput {

    @Field(() => [FileScalarWhereInput], {nullable:true})
    AND?: Array<FileScalarWhereInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    OR?: Array<FileScalarWhereInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    NOT?: Array<FileScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    filename?: StringFilter;

    @Field(() => EnumFileTypeFilter, {nullable:true})
    fileType?: EnumFileTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    mimetype?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    encoding?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    @Type(() => StringFilter)
    data?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cdnUrl?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    varantName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    variantKey?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    variantValue?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    variantOfId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;
}
