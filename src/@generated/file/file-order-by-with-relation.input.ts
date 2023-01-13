import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByRelationAggregateInput } from './file-order-by-relation-aggregate.input';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';

@InputType()
export class FileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filename?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mimetype?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encoding?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdnUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    varantName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    variantKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    variantValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    variantOfId?: keyof typeof SortOrder;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    variantOf?: FileOrderByWithRelationInput;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    variants?: FileOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    avatarUsers?: UserOrderByRelationAggregateInput;
}
