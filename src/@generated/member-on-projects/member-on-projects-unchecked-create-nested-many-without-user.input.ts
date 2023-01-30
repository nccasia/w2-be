import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsCreateWithoutUserInput } from './member-on-projects-create-without-user.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsCreateOrConnectWithoutUserInput } from './member-on-projects-create-or-connect-without-user.input';
import { MemberOnProjectsCreateManyUserInputEnvelope } from './member-on-projects-create-many-user-input-envelope.input';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';

@InputType()
export class MemberOnProjectsUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [MemberOnProjectsCreateWithoutUserInput], {nullable:true})
    @Type(() => MemberOnProjectsCreateWithoutUserInput)
    create?: Array<MemberOnProjectsCreateWithoutUserInput>;

    @Field(() => [MemberOnProjectsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MemberOnProjectsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MemberOnProjectsCreateOrConnectWithoutUserInput>;

    @Field(() => MemberOnProjectsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MemberOnProjectsCreateManyUserInputEnvelope)
    createMany?: MemberOnProjectsCreateManyUserInputEnvelope;

    @Field(() => [MemberOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    connect?: Array<MemberOnProjectsWhereUniqueInput>;
}
