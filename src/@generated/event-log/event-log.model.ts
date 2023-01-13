import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Task } from '../task/task.model';
import { Action } from '../action/action.model';
import { Organization } from '../organization/organization.model';

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
    actionId!: number;

    @Field(() => Action, {nullable:true})
    Action?: Action | null;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;
}
