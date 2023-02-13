import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProjectSettingsUncheckedCreateNestedManyWithoutProjectInput } from '../project-settings/project-settings-unchecked-create-nested-many-without-project.input';
import { TaskUncheckedCreateNestedManyWithoutProjectInput } from '../task/task-unchecked-create-nested-many-without-project.input';
import { TaskBoardUncheckedCreateNestedManyWithoutProjectInput } from '../task-board/task-board-unchecked-create-nested-many-without-project.input';

@InputType()
export class ProjectUncheckedCreateWithoutMembersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:false})
    taskDefinitionId!: number;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:false})
    managerId!: number;

    @Field(() => Int, {nullable:false})
    reporterId!: number;

    @Field(() => ProjectSettingsUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    settings?: ProjectSettingsUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => TaskBoardUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    taskBoards?: TaskBoardUncheckedCreateNestedManyWithoutProjectInput;
}
