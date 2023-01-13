import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutTaskDefinitionsInput } from './organization-update-without-task-definitions.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutTaskDefinitionsInput } from './organization-create-without-task-definitions.input';

@InputType()
export class OrganizationUpsertWithoutTaskDefinitionsInput {

    @Field(() => OrganizationUpdateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutTaskDefinitionsInput)
    update!: OrganizationUpdateWithoutTaskDefinitionsInput;

    @Field(() => OrganizationCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutTaskDefinitionsInput)
    create!: OrganizationCreateWithoutTaskDefinitionsInput;
}
