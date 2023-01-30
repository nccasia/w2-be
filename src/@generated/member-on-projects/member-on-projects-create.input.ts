import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateNestedOneWithoutMembersInput } from '../project/project-create-nested-one-without-members.input';
import { UserCreateNestedOneWithoutMemberOnProjectsInput } from '../user/user-create-nested-one-without-member-on-projects.input';

@InputType()
export class MemberOnProjectsCreateInput {

    @Field(() => ProjectCreateNestedOneWithoutMembersInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutMembersInput;

    @Field(() => UserCreateNestedOneWithoutMemberOnProjectsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMemberOnProjectsInput;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}
