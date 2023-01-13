import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamUpdateWithoutOrganizationInput } from './team-update-without-organization.input';
import { TeamCreateWithoutOrganizationInput } from './team-create-without-organization.input';

@InputType()
export class TeamUpsertWithWhereUniqueWithoutOrganizationInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => TeamUpdateWithoutOrganizationInput)
    update!: TeamUpdateWithoutOrganizationInput;

    @Field(() => TeamCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => TeamCreateWithoutOrganizationInput)
    create!: TeamCreateWithoutOrganizationInput;
}
