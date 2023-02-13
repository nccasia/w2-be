import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Task } from '../task/task.model';
import { TaskDefinition } from '../task-definition/task-definition.model';
import { FormCount } from './form-count.output';

@ObjectType()
export class Form {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    schema!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    validationConfig!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => GraphQLJSON, {nullable:true})
    values!: any | null;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => [TaskDefinition], {nullable:true})
    taskDefinitions?: Array<TaskDefinition>;

    @Field(() => FormCount, {nullable:false})
    _count?: FormCount;
}
