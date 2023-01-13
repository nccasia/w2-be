import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutEventLogsInput } from './organization-create-without-event-logs.input';

@InputType()
export class OrganizationCreateOrConnectWithoutEventLogsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutEventLogsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutEventLogsInput)
    create!: OrganizationCreateWithoutEventLogsInput;
}
