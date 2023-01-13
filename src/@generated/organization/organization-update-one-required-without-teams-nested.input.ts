import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutTeamsInput } from './organization-create-without-teams.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutTeamsInput } from './organization-create-or-connect-without-teams.input';
import { OrganizationUpsertWithoutTeamsInput } from './organization-upsert-without-teams.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutTeamsInput } from './organization-update-without-teams.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutTeamsNestedInput {

    @Field(() => OrganizationCreateWithoutTeamsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutTeamsInput)
    create?: OrganizationCreateWithoutTeamsInput;

    @Field(() => OrganizationCreateOrConnectWithoutTeamsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutTeamsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutTeamsInput;

    @Field(() => OrganizationUpsertWithoutTeamsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutTeamsInput)
    upsert?: OrganizationUpsertWithoutTeamsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutTeamsInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutTeamsInput)
    update?: OrganizationUpdateWithoutTeamsInput;
}
