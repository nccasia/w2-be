import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ActivityType } from '../prisma/activity-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionActivityDefinition } from '../task-definition-activity-definition/task-definition-activity-definition.model';
import { ActivityDefinitionCount } from './activity-definition-count.output';

@ObjectType()
export class ActivityDefinition {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    synchronous!: boolean;

    @Field(() => ActivityType, {nullable:false})
    type!: keyof typeof ActivityType;

    @Field(() => GraphQLJSON, {nullable:true})
    config!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    initialValue!: any | null;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [TaskDefinitionActivityDefinition], {nullable:true})
    taskDefinitionActivityDefinitions?: Array<TaskDefinitionActivityDefinition>;

    @Field(() => ActivityDefinitionCount, {nullable:false})
    _count?: ActivityDefinitionCount;
}
