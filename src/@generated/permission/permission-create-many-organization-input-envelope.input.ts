import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateManyOrganizationInput } from './permission-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionCreateManyOrganizationInputEnvelope {

    @Field(() => [PermissionCreateManyOrganizationInput], {nullable:false})
    @Type(() => PermissionCreateManyOrganizationInput)
    data!: Array<PermissionCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
