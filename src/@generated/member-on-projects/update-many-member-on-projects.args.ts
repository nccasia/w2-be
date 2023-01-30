import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnProjectsUpdateManyMutationInput } from './member-on-projects-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsWhereInput } from './member-on-projects-where.input';

@ArgsType()
export class UpdateManyMemberOnProjectsArgs {

    @Field(() => MemberOnProjectsUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberOnProjectsUpdateManyMutationInput)
    data!: MemberOnProjectsUpdateManyMutationInput;

    @Field(() => MemberOnProjectsWhereInput, {nullable:true})
    @Type(() => MemberOnProjectsWhereInput)
    where?: MemberOnProjectsWhereInput;
}
