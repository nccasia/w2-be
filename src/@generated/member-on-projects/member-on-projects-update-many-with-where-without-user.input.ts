import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsScalarWhereInput } from './member-on-projects-scalar-where.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsUpdateManyMutationInput } from './member-on-projects-update-many-mutation.input';

@InputType()
export class MemberOnProjectsUpdateManyWithWhereWithoutUserInput {

    @Field(() => MemberOnProjectsScalarWhereInput, {nullable:false})
    @Type(() => MemberOnProjectsScalarWhereInput)
    where!: MemberOnProjectsScalarWhereInput;

    @Field(() => MemberOnProjectsUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberOnProjectsUpdateManyMutationInput)
    data!: MemberOnProjectsUpdateManyMutationInput;
}
