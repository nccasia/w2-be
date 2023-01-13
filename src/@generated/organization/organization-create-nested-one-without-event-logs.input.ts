import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutEventLogsInput } from './organization-create-without-event-logs.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutEventLogsInput } from './organization-create-or-connect-without-event-logs.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutEventLogsInput {

    @Field(() => OrganizationCreateWithoutEventLogsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutEventLogsInput)
    create?: OrganizationCreateWithoutEventLogsInput;

    @Field(() => OrganizationCreateOrConnectWithoutEventLogsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutEventLogsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventLogsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
