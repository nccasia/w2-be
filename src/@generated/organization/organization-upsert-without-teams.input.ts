import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutTeamsInput } from './organization-update-without-teams.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutTeamsInput } from './organization-create-without-teams.input';

@InputType()
export class OrganizationUpsertWithoutTeamsInput {

    @Field(() => OrganizationUpdateWithoutTeamsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutTeamsInput)
    update!: OrganizationUpdateWithoutTeamsInput;

    @Field(() => OrganizationCreateWithoutTeamsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutTeamsInput)
    create!: OrganizationCreateWithoutTeamsInput;
}
