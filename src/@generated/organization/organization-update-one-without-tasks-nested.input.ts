import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutTasksInput } from './organization-create-without-tasks.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutTasksInput } from './organization-create-or-connect-without-tasks.input';
import { OrganizationUpsertWithoutTasksInput } from './organization-upsert-without-tasks.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutTasksInput } from './organization-update-without-tasks.input';

@InputType()
export class OrganizationUpdateOneWithoutTasksNestedInput {

    @Field(() => OrganizationCreateWithoutTasksInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutTasksInput)
    create?: OrganizationCreateWithoutTasksInput;

    @Field(() => OrganizationCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutTasksInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutTasksInput;

    @Field(() => OrganizationUpsertWithoutTasksInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutTasksInput)
    upsert?: OrganizationUpsertWithoutTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutTasksInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutTasksInput)
    update?: OrganizationUpdateWithoutTasksInput;
}
