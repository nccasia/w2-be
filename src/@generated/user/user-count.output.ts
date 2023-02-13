import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    taskEvents?: number;

    @Field(() => Int, {nullable:false})
    memberOnProjects?: number;

    @Field(() => Int, {nullable:false})
    memberOnTeams?: number;

    @Field(() => Int, {nullable:false})
    posts?: number;

    @Field(() => Int, {nullable:false})
    createdProjects?: number;

    @Field(() => Int, {nullable:false})
    managedProjects?: number;

    @Field(() => Int, {nullable:false})
    repotedProjects?: number;

    @Field(() => Int, {nullable:false})
    assignedTasks?: number;

    @Field(() => Int, {nullable:false})
    createdTasks?: number;

    @Field(() => Int, {nullable:false})
    reportedTasks?: number;

    @Field(() => Int, {nullable:false})
    createdteams?: number;

    @Field(() => Int, {nullable:false})
    managedteams?: number;

    @Field(() => Int, {nullable:false})
    userPermissions?: number;

    @Field(() => Int, {nullable:false})
    userSettings?: number;
}
