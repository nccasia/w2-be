import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class SettingsScalarWhereInput {

    @Field(() => [SettingsScalarWhereInput], {nullable:true})
    AND?: Array<SettingsScalarWhereInput>;

    @Field(() => [SettingsScalarWhereInput], {nullable:true})
    OR?: Array<SettingsScalarWhereInput>;

    @Field(() => [SettingsScalarWhereInput], {nullable:true})
    NOT?: Array<SettingsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;
}
