import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutProjectsInput } from './organization-create-without-projects.input';

@InputType()
export class OrganizationCreateOrConnectWithoutProjectsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutProjectsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutProjectsInput)
    create!: OrganizationCreateWithoutProjectsInput;
}
