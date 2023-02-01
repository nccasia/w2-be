import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Task } from '../task/task.model';
import { Organization } from '../organization/organization.model';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class EventLog {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    taskId!: number | null;

    @Field(() => Task, {nullable:true})
    task?: Task | null;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => GraphQLJSON, {nullable:true})
    context!: any | null;

    @Field(() => String, {nullable:true})
    action!: string | null;

    @Field(() => String, {nullable:true})
    intent!: string | null;

    @Field(() => String, {nullable:true})
    domain!: string | null;

    @Field(() => String, {nullable:true})
    content!: string | null;
}
