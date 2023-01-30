import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutProjectsInput } from './organization-update-without-projects.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutProjectsInput } from './organization-create-without-projects.input';

@InputType()
export class OrganizationUpsertWithoutProjectsInput {

    @Field(() => OrganizationUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutProjectsInput)
    update!: OrganizationUpdateWithoutProjectsInput;

    @Field(() => OrganizationCreateWithoutProjectsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutProjectsInput)
    create!: OrganizationCreateWithoutProjectsInput;
}
