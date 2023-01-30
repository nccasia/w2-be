import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMemberOnProjectsInput } from '../user/user-create-nested-one-without-member-on-projects.input';

@InputType()
export class MemberOnProjectsCreateWithoutProjectInput {

    @Field(() => UserCreateNestedOneWithoutMemberOnProjectsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMemberOnProjectsInput;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}
