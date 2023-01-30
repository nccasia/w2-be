import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsCreateWithoutProjectInput } from './member-on-projects-create-without-project.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsCreateOrConnectWithoutProjectInput } from './member-on-projects-create-or-connect-without-project.input';
import { MemberOnProjectsCreateManyProjectInputEnvelope } from './member-on-projects-create-many-project-input-envelope.input';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';

@InputType()
export class MemberOnProjectsCreateNestedManyWithoutProjectInput {

    @Field(() => [MemberOnProjectsCreateWithoutProjectInput], {nullable:true})
    @Type(() => MemberOnProjectsCreateWithoutProjectInput)
    create?: Array<MemberOnProjectsCreateWithoutProjectInput>;

    @Field(() => [MemberOnProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => MemberOnProjectsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<MemberOnProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => MemberOnProjectsCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => MemberOnProjectsCreateManyProjectInputEnvelope)
    createMany?: MemberOnProjectsCreateManyProjectInputEnvelope;

    @Field(() => [MemberOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    connect?: Array<MemberOnProjectsWhereUniqueInput>;
}
