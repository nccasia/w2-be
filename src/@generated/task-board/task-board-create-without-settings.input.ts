import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardType } from '../prisma/task-board-type.enum';
import { TaskBoardViewType } from '../task/task-board-view-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Visibility } from '../prisma/visibility.enum';
import { OrganizationCreateNestedOneWithoutTaskBoardsInput } from '../organization/organization-create-nested-one-without-task-boards.input';
import { ProjectCreateNestedOneWithoutTaskBoardsInput } from '../project/project-create-nested-one-without-task-boards.input';
import { TaskDefinitionCreateNestedOneWithoutTaskBoardsInput } from '../task-definition/task-definition-create-nested-one-without-task-boards.input';

@InputType()
export class TaskBoardCreateWithoutSettingsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => TaskBoardType, {nullable:true})
    type?: keyof typeof TaskBoardType;

    @Field(() => TaskBoardViewType, {nullable:true})
    viewType?: keyof typeof TaskBoardViewType;

    @Field(() => GraphQLJSON, {nullable:true})
    viewConfig?: any;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => OrganizationCreateNestedOneWithoutTaskBoardsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutTaskBoardsInput;

    @Field(() => ProjectCreateNestedOneWithoutTaskBoardsInput, {nullable:true})
    project?: ProjectCreateNestedOneWithoutTaskBoardsInput;

    @Field(() => TaskDefinitionCreateNestedOneWithoutTaskBoardsInput, {nullable:false})
    taskDefinition!: TaskDefinitionCreateNestedOneWithoutTaskBoardsInput;
}
