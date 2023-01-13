import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamUpdateWithoutOrganizationInput } from './team-update-without-organization.input';

@InputType()
export class TeamUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => TeamUpdateWithoutOrganizationInput)
    data!: TeamUpdateWithoutOrganizationInput;
}
