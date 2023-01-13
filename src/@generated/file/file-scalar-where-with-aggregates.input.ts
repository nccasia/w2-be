import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumFileTypeWithAggregatesFilter } from '../prisma/enum-file-type-with-aggregates-filter.input';
import { Type } from 'class-transformer';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class FileScalarWhereWithAggregatesInput {

    @Field(() => [FileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FileScalarWhereWithAggregatesInput>;

    @Field(() => [FileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FileScalarWhereWithAggregatesInput>;

    @Field(() => [FileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FileScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    filename?: StringWithAggregatesFilter;

    @Field(() => EnumFileTypeWithAggregatesFilter, {nullable:true})
    fileType?: EnumFileTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    mimetype?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    encoding?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    @Type(() => StringWithAggregatesFilter)
    data?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cdnUrl?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    varantName?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    variantKey?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    variantValue?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    variantOfId?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    organizationId?: IntWithAggregatesFilter;
}
