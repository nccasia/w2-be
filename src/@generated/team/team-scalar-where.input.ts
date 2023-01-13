import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TeamScalarWhereInput {

    @Field(() => [TeamScalarWhereInput], {nullable:true})
    AND?: Array<TeamScalarWhereInput>;

    @Field(() => [TeamScalarWhereInput], {nullable:true})
    OR?: Array<TeamScalarWhereInput>;

    @Field(() => [TeamScalarWhereInput], {nullable:true})
    NOT?: Array<TeamScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bio?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    creatorId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    managerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;
}
