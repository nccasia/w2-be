import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateNestedOneWithoutMembersInput } from '../project/project-create-nested-one-without-members.input';

@InputType()
export class MemberOnProjectsCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => ProjectCreateNestedOneWithoutMembersInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutMembersInput;
}
