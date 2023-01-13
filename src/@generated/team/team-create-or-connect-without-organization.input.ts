import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutOrganizationInput } from './team-create-without-organization.input';

@InputType()
export class TeamCreateOrConnectWithoutOrganizationInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => TeamCreateWithoutOrganizationInput)
    create!: TeamCreateWithoutOrganizationInput;
}
