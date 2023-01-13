import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutTeamsInput } from './organization-create-without-teams.input';

@InputType()
export class OrganizationCreateOrConnectWithoutTeamsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutTeamsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutTeamsInput)
    create!: OrganizationCreateWithoutTeamsInput;
}
