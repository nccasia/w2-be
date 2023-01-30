import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskBoardCreateNestedOneWithoutSettingsInput } from '../task-board/task-board-create-nested-one-without-settings.input';

@InputType()
export class TaskBoardSettingsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    value?: any;

    @Field(() => TaskBoardCreateNestedOneWithoutSettingsInput, {nullable:false})
    taskBoard!: TaskBoardCreateNestedOneWithoutSettingsInput;
}
