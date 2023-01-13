import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutTasksInput } from './organization-create-without-tasks.input';

@InputType()
export class OrganizationCreateOrConnectWithoutTasksInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutTasksInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutTasksInput)
    create!: OrganizationCreateWithoutTasksInput;
}
