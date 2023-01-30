import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsCreateWithoutUserInput } from './member-on-projects-create-without-user.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsCreateOrConnectWithoutUserInput } from './member-on-projects-create-or-connect-without-user.input';
import { MemberOnProjectsUpsertWithWhereUniqueWithoutUserInput } from './member-on-projects-upsert-with-where-unique-without-user.input';
import { MemberOnProjectsCreateManyUserInputEnvelope } from './member-on-projects-create-many-user-input-envelope.input';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { MemberOnProjectsUpdateWithWhereUniqueWithoutUserInput } from './member-on-projects-update-with-where-unique-without-user.input';
import { MemberOnProjectsUpdateManyWithWhereWithoutUserInput } from './member-on-projects-update-many-with-where-without-user.input';
import { MemberOnProjectsScalarWhereInput } from './member-on-projects-scalar-where.input';

@InputType()
export class MemberOnProjectsUpdateManyWithoutUserNestedInput {

    @Field(() => [MemberOnProjectsCreateWithoutUserInput], {nullable:true})
    @Type(() => MemberOnProjectsCreateWithoutUserInput)
    create?: Array<MemberOnProjectsCreateWithoutUserInput>;

    @Field(() => [MemberOnProjectsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MemberOnProjectsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MemberOnProjectsCreateOrConnectWithoutUserInput>;

    @Field(() => [MemberOnProjectsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MemberOnProjectsUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<MemberOnProjectsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => MemberOnProjectsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MemberOnProjectsCreateManyUserInputEnvelope)
    createMany?: MemberOnProjectsCreateManyUserInputEnvelope;

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

    @Field(() => [MemberOnProjectsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MemberOnProjectsUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<MemberOnProjectsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [MemberOnProjectsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => MemberOnProjectsUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<MemberOnProjectsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [MemberOnProjectsScalarWhereInput], {nullable:true})
    @Type(() => MemberOnProjectsScalarWhereInput)
    deleteMany?: Array<MemberOnProjectsScalarWhereInput>;
}
