import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsUpdateWithoutUserInput } from './member-on-projects-update-without-user.input';

@InputType()
export class MemberOnProjectsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    where!: MemberOnProjectsWhereUniqueInput;

    @Field(() => MemberOnProjectsUpdateWithoutUserInput, {nullable:false})
    @Type(() => MemberOnProjectsUpdateWithoutUserInput)
    data!: MemberOnProjectsUpdateWithoutUserInput;
}
