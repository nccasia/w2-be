import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MemberOnTeamsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    teamId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}
