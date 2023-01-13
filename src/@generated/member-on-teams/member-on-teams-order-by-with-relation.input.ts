import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamOrderByWithRelationInput } from '../team/team-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class MemberOnTeamsOrderByWithRelationInput {

    @Field(() => TeamOrderByWithRelationInput, {nullable:true})
    team?: TeamOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedBy?: keyof typeof SortOrder;
}
