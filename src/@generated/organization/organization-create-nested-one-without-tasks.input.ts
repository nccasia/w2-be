import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutTasksInput } from './organization-create-without-tasks.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutTasksInput } from './organization-create-or-connect-without-tasks.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutTasksInput {

    @Field(() => OrganizationCreateWithoutTasksInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutTasksInput)
    create?: OrganizationCreateWithoutTasksInput;

    @Field(() => OrganizationCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutTasksInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutTasksInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
