import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MemberOnProjectsScalarWhereInput {

    @Field(() => [MemberOnProjectsScalarWhereInput], {nullable:true})
    AND?: Array<MemberOnProjectsScalarWhereInput>;

    @Field(() => [MemberOnProjectsScalarWhereInput], {nullable:true})
    OR?: Array<MemberOnProjectsScalarWhereInput>;

    @Field(() => [MemberOnProjectsScalarWhereInput], {nullable:true})
    NOT?: Array<MemberOnProjectsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}
