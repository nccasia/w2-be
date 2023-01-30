import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateNestedOneWithoutProjectsInput } from '../organization/organization-create-nested-one-without-projects.input';
import { TaskDefinitionCreateNestedOneWithoutProjectsInput } from '../task-definition/task-definition-create-nested-one-without-projects.input';
import { TaskCreateNestedManyWithoutProjectInput } from '../task/task-create-nested-many-without-project.input';
import { UserCreateNestedOneWithoutCreatedProjectsInput } from '../user/user-create-nested-one-without-created-projects.input';
import { UserCreateNestedOneWithoutManagedProjectsInput } from '../user/user-create-nested-one-without-managed-projects.input';
import { MemberOnProjectsCreateNestedManyWithoutProjectInput } from '../member-on-projects/member-on-projects-create-nested-many-without-project.input';
import { TaskBoardCreateNestedManyWithoutProjectInput } from '../task-board/task-board-create-nested-many-without-project.input';
import { ProjectSettingsCreateNestedManyWithoutProjectInput } from '../project-settings/project-settings-create-nested-many-without-project.input';

@InputType()
export class ProjectCreateWithoutReporterInput {

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

    @Field(() => OrganizationCreateNestedOneWithoutProjectsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutProjectsInput;

    @Field(() => TaskDefinitionCreateNestedOneWithoutProjectsInput, {nullable:false})
    taskDefinition!: TaskDefinitionCreateNestedOneWithoutProjectsInput;

    @Field(() => TaskCreateNestedManyWithoutProjectInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutProjectInput;

    @Field(() => UserCreateNestedOneWithoutCreatedProjectsInput, {nullable:false})
    creator!: UserCreateNestedOneWithoutCreatedProjectsInput;

    @Field(() => UserCreateNestedOneWithoutManagedProjectsInput, {nullable:false})
    manager!: UserCreateNestedOneWithoutManagedProjectsInput;

    @Field(() => MemberOnProjectsCreateNestedManyWithoutProjectInput, {nullable:true})
    members?: MemberOnProjectsCreateNestedManyWithoutProjectInput;

    @Field(() => TaskBoardCreateNestedManyWithoutProjectInput, {nullable:true})
    taskBoards?: TaskBoardCreateNestedManyWithoutProjectInput;

    @Field(() => ProjectSettingsCreateNestedManyWithoutProjectInput, {nullable:true})
    settings?: ProjectSettingsCreateNestedManyWithoutProjectInput;
}
