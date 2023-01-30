import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsProjectIdUserIdCompoundUniqueInput } from './member-on-projects-project-id-user-id-compound-unique.input';

@InputType()
export class MemberOnProjectsWhereUniqueInput {

    @Field(() => MemberOnProjectsProjectIdUserIdCompoundUniqueInput, {nullable:true})
    projectId_userId?: MemberOnProjectsProjectIdUserIdCompoundUniqueInput;
}
