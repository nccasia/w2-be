import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutEventLogsInput } from './organization-create-without-event-logs.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutEventLogsInput } from './organization-create-or-connect-without-event-logs.input';
import { OrganizationUpsertWithoutEventLogsInput } from './organization-upsert-without-event-logs.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutEventLogsInput } from './organization-update-without-event-logs.input';

@InputType()
export class OrganizationUpdateOneWithoutEventLogsNestedInput {

    @Field(() => OrganizationCreateWithoutEventLogsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutEventLogsInput)
    create?: OrganizationCreateWithoutEventLogsInput;

    @Field(() => OrganizationCreateOrConnectWithoutEventLogsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutEventLogsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventLogsInput;

    @Field(() => OrganizationUpsertWithoutEventLogsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutEventLogsInput)
    upsert?: OrganizationUpsertWithoutEventLogsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutEventLogsInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutEventLogsInput)
    update?: OrganizationUpdateWithoutEventLogsInput;
}
