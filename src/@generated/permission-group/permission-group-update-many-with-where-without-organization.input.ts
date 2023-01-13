import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupScalarWhereInput } from './permission-group-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionGroupUpdateManyMutationInput } from './permission-group-update-many-mutation.input';

@InputType()
export class PermissionGroupUpdateManyWithWhereWithoutOrganizationInput {

    @Field(() => PermissionGroupScalarWhereInput, {nullable:false})
    @Type(() => PermissionGroupScalarWhereInput)
    where!: PermissionGroupScalarWhereInput;

    @Field(() => PermissionGroupUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionGroupUpdateManyMutationInput)
    data!: PermissionGroupUpdateManyMutationInput;
}
