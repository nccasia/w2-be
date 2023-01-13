import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutOrganizationInput } from './team-create-without-organization.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutOrganizationInput } from './team-create-or-connect-without-organization.input';
import { TeamCreateManyOrganizationInputEnvelope } from './team-create-many-organization-input-envelope.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';

@InputType()
export class TeamUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [TeamCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => TeamCreateWithoutOrganizationInput)
    create?: Array<TeamCreateWithoutOrganizationInput>;

    @Field(() => [TeamCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<TeamCreateOrConnectWithoutOrganizationInput>;

    @Field(() => TeamCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => TeamCreateManyOrganizationInputEnvelope)
    createMany?: TeamCreateManyOrganizationInputEnvelope;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: Array<TeamWhereUniqueInput>;
}
