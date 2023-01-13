import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutResourcesInput } from './organization-update-without-resources.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutResourcesInput } from './organization-create-without-resources.input';

@InputType()
export class OrganizationUpsertWithoutResourcesInput {

    @Field(() => OrganizationUpdateWithoutResourcesInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutResourcesInput)
    update!: OrganizationUpdateWithoutResourcesInput;

    @Field(() => OrganizationCreateWithoutResourcesInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutResourcesInput)
    create!: OrganizationCreateWithoutResourcesInput;
}
