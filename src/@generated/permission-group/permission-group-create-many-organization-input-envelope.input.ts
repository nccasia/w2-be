import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupCreateManyOrganizationInput } from './permission-group-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionGroupCreateManyOrganizationInputEnvelope {

    @Field(() => [PermissionGroupCreateManyOrganizationInput], {nullable:false})
    @Type(() => PermissionGroupCreateManyOrganizationInput)
    data!: Array<PermissionGroupCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
