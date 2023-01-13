import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionScalarWhereInput } from './user-permission-scalar-where.input';
import { Type } from 'class-transformer';
import { UserPermissionUpdateManyMutationInput } from './user-permission-update-many-mutation.input';

@InputType()
export class UserPermissionUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserPermissionScalarWhereInput, {nullable:false})
    @Type(() => UserPermissionScalarWhereInput)
    where!: UserPermissionScalarWhereInput;

    @Field(() => UserPermissionUpdateManyMutationInput, {nullable:false})
    @Type(() => UserPermissionUpdateManyMutationInput)
    data!: UserPermissionUpdateManyMutationInput;
}
