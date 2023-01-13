import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutTeamsInput } from './organization-create-without-teams.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutTeamsInput } from './organization-create-or-connect-without-teams.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutTeamsInput {

    @Field(() => OrganizationCreateWithoutTeamsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutTeamsInput)
    create?: OrganizationCreateWithoutTeamsInput;

    @Field(() => OrganizationCreateOrConnectWithoutTeamsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutTeamsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutTeamsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
