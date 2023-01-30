import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsUpdateWithoutUserInput } from './member-on-projects-update-without-user.input';
import { MemberOnProjectsCreateWithoutUserInput } from './member-on-projects-create-without-user.input';

@InputType()
export class MemberOnProjectsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    where!: MemberOnProjectsWhereUniqueInput;

    @Field(() => MemberOnProjectsUpdateWithoutUserInput, {nullable:false})
    @Type(() => MemberOnProjectsUpdateWithoutUserInput)
    update!: MemberOnProjectsUpdateWithoutUserInput;

    @Field(() => MemberOnProjectsCreateWithoutUserInput, {nullable:false})
    @Type(() => MemberOnProjectsCreateWithoutUserInput)
    create!: MemberOnProjectsCreateWithoutUserInput;
}
