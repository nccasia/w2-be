import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutTaskDefinitionsInput } from './organization-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutTaskDefinitionsInput } from './organization-create-or-connect-without-task-definitions.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutTaskDefinitionsInput {

    @Field(() => OrganizationCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutTaskDefinitionsInput)
    create?: OrganizationCreateWithoutTaskDefinitionsInput;

    @Field(() => OrganizationCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
