import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutUsersInput } from './organization-update-without-users.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutUsersInput } from './organization-create-without-users.input';

@InputType()
export class OrganizationUpsertWithoutUsersInput {

    @Field(() => OrganizationUpdateWithoutUsersInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutUsersInput)
    update!: OrganizationUpdateWithoutUsersInput;

    @Field(() => OrganizationCreateWithoutUsersInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutUsersInput)
    create!: OrganizationCreateWithoutUsersInput;
}
