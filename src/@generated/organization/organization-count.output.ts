import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrganizationCount {

    @Field(() => Int, {nullable:false})
    eventLogs?: number;

    @Field(() => Int, {nullable:false})
    files?: number;

    @Field(() => Int, {nullable:false})
    permissions?: number;

    @Field(() => Int, {nullable:false})
    permissionGroups?: number;

    @Field(() => Int, {nullable:false})
    projects?: number;

    @Field(() => Int, {nullable:false})
    resources?: number;

    @Field(() => Int, {nullable:false})
    settings?: number;

    @Field(() => Int, {nullable:false})
    tasks?: number;

    @Field(() => Int, {nullable:false})
    taskBoards?: number;

    @Field(() => Int, {nullable:false})
    taskDefinitions?: number;

    @Field(() => Int, {nullable:false})
    teams?: number;

    @Field(() => Int, {nullable:false})
    users?: number;
}
