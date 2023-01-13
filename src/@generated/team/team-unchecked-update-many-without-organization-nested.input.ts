import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutOrganizationInput } from './team-create-without-organization.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutOrganizationInput } from './team-create-or-connect-without-organization.input';
import { TeamUpsertWithWhereUniqueWithoutOrganizationInput } from './team-upsert-with-where-unique-without-organization.input';
import { TeamCreateManyOrganizationInputEnvelope } from './team-create-many-organization-input-envelope.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { TeamUpdateWithWhereUniqueWithoutOrganizationInput } from './team-update-with-where-unique-without-organization.input';
import { TeamUpdateManyWithWhereWithoutOrganizationInput } from './team-update-many-with-where-without-organization.input';
import { TeamScalarWhereInput } from './team-scalar-where.input';

@InputType()
export class TeamUncheckedUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [TeamCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => TeamCreateWithoutOrganizationInput)
    create?: Array<TeamCreateWithoutOrganizationInput>;

    @Field(() => [TeamCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<TeamCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [TeamUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => TeamUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<TeamUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => TeamCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => TeamCreateManyOrganizationInputEnvelope)
    createMany?: TeamCreateManyOrganizationInputEnvelope;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    set?: Array<TeamWhereUniqueInput>;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    disconnect?: Array<TeamWhereUniqueInput>;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    delete?: Array<TeamWhereUniqueInput>;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: Array<TeamWhereUniqueInput>;

    @Field(() => [TeamUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => TeamUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<TeamUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [TeamUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => TeamUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<TeamUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [TeamScalarWhereInput], {nullable:true})
    @Type(() => TeamScalarWhereInput)
    deleteMany?: Array<TeamScalarWhereInput>;
}
