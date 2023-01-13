import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutTasksInput } from './organization-update-without-tasks.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutTasksInput } from './organization-create-without-tasks.input';

@InputType()
export class OrganizationUpsertWithoutTasksInput {

    @Field(() => OrganizationUpdateWithoutTasksInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutTasksInput)
    update!: OrganizationUpdateWithoutTasksInput;

    @Field(() => OrganizationCreateWithoutTasksInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutTasksInput)
    create!: OrganizationCreateWithoutTasksInput;
}
