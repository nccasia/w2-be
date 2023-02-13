import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { TaskBoard } from '../task-board/task-board.model';

@ObjectType()
export class TaskBoardSettings {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:false,defaultValue:'{}'})
    value!: any;

    @Field(() => Int, {nullable:false})
    taskBoardId!: number;

    @Field(() => TaskBoard, {nullable:false})
    taskBoard?: TaskBoard;
}
