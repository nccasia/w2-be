import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutTaskDefinitionsInput } from './organization-create-without-task-definitions.input';

@InputType()
export class OrganizationCreateOrConnectWithoutTaskDefinitionsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutTaskDefinitionsInput)
    create!: OrganizationCreateWithoutTaskDefinitionsInput;
}
