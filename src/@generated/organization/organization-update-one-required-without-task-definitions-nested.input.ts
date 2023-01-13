import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutTaskDefinitionsInput } from './organization-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutTaskDefinitionsInput } from './organization-create-or-connect-without-task-definitions.input';
import { OrganizationUpsertWithoutTaskDefinitionsInput } from './organization-upsert-without-task-definitions.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutTaskDefinitionsInput } from './organization-update-without-task-definitions.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutTaskDefinitionsNestedInput {

    @Field(() => OrganizationCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutTaskDefinitionsInput)
    create?: OrganizationCreateWithoutTaskDefinitionsInput;

    @Field(() => OrganizationCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => OrganizationUpsertWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutTaskDefinitionsInput)
    upsert?: OrganizationUpsertWithoutTaskDefinitionsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutTaskDefinitionsInput)
    update?: OrganizationUpdateWithoutTaskDefinitionsInput;
}
