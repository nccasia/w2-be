import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Team } from '../team/team.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class MemberOnTeams {

    @Field(() => Team, {nullable:false})
    team?: Team;

    @Field(() => Int, {nullable:false})
    teamId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}
