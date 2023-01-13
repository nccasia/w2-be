import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CommentScalarWhereInput {

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    AND?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    OR?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    NOT?: Array<CommentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    creatorId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;
}
