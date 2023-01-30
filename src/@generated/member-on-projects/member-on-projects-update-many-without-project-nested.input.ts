import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsCreateWithoutProjectInput } from './member-on-projects-create-without-project.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsCreateOrConnectWithoutProjectInput } from './member-on-projects-create-or-connect-without-project.input';
import { MemberOnProjectsUpsertWithWhereUniqueWithoutProjectInput } from './member-on-projects-upsert-with-where-unique-without-project.input';
import { MemberOnProjectsCreateManyProjectInputEnvelope } from './member-on-projects-create-many-project-input-envelope.input';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { MemberOnProjectsUpdateWithWhereUniqueWithoutProjectInput } from './member-on-projects-update-with-where-unique-without-project.input';
import { MemberOnProjectsUpdateManyWithWhereWithoutProjectInput } from './member-on-projects-update-many-with-where-without-project.input';
import { MemberOnProjectsScalarWhereInput } from './member-on-projects-scalar-where.input';

@InputType()
export class MemberOnProjectsUpdateManyWithoutProjectNestedInput {

    @Field(() => [MemberOnProjectsCreateWithoutProjectInput], {nullable:true})
    @Type(() => MemberOnProjectsCreateWithoutProjectInput)
    create?: Array<MemberOnProjectsCreateWithoutProjectInput>;

    @Field(() => [MemberOnProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => MemberOnProjectsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<MemberOnProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => [MemberOnProjectsUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => MemberOnProjectsUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<MemberOnProjectsUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => MemberOnProjectsCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => MemberOnProjectsCreateManyProjectInputEnvelope)
    createMany?: MemberOnProjectsCreateManyProjectInputEnvelope;

    @Field(() => [MemberOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    set?: Array<MemberOnProjectsWhereUniqueInput>;

    @Field(() => [MemberOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    disconnect?: Array<MemberOnProjectsWhereUniqueInput>;

    @Field(() => [MemberOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    delete?: Array<MemberOnProjectsWhereUniqueInput>;

    @Field(() => [MemberOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    connect?: Array<MemberOnProjectsWhereUniqueInput>;

    @Field(() => [MemberOnProjectsUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => MemberOnProjectsUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<MemberOnProjectsUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [MemberOnProjectsUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => MemberOnProjectsUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<MemberOnProjectsUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [MemberOnProjectsScalarWhereInput], {nullable:true})
    @Type(() => MemberOnProjectsScalarWhereInput)
    deleteMany?: Array<MemberOnProjectsScalarWhereInput>;
}
