import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Organization } from '../organization/organization.model';
import { Activity } from '../activity/activity.model';
import { TaskDefinition } from '../task-definition/task-definition.model';
import { WorkflowCount } from './workflow-count.output';

@ObjectType()
export class Workflow {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => [Activity], {nullable:true})
    activities?: Array<Activity>;

    @Field(() => [TaskDefinition], {nullable:true})
    taskDefinitions?: Array<TaskDefinition>;

    @Field(() => WorkflowCount, {nullable:false})
    _count?: WorkflowCount;
}
