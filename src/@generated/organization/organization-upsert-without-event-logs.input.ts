import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutEventLogsInput } from './organization-update-without-event-logs.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutEventLogsInput } from './organization-create-without-event-logs.input';

@InputType()
export class OrganizationUpsertWithoutEventLogsInput {

    @Field(() => OrganizationUpdateWithoutEventLogsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutEventLogsInput)
    update!: OrganizationUpdateWithoutEventLogsInput;

    @Field(() => OrganizationCreateWithoutEventLogsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutEventLogsInput)
    create!: OrganizationCreateWithoutEventLogsInput;
}
