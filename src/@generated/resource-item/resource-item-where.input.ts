import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ResourceRelationFilter } from '../resource/resource-relation-filter.input';

@InputType()
export class ResourceItemWhereInput {

    @Field(() => [ResourceItemWhereInput], {nullable:true})
    AND?: Array<ResourceItemWhereInput>;

    @Field(() => [ResourceItemWhereInput], {nullable:true})
    OR?: Array<ResourceItemWhereInput>;

    @Field(() => [ResourceItemWhereInput], {nullable:true})
    NOT?: Array<ResourceItemWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    icon?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    resourceId?: IntFilter;

    @Field(() => ResourceRelationFilter, {nullable:true})
    resource?: ResourceRelationFilter;
}
