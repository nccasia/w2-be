import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionUpdateManyMutationInput } from './user-permission-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserPermissionWhereInput } from './user-permission-where.input';

@ArgsType()
export class UpdateManyUserPermissionArgs {

    @Field(() => UserPermissionUpdateManyMutationInput, {nullable:false})
    @Type(() => UserPermissionUpdateManyMutationInput)
    data!: UserPermissionUpdateManyMutationInput;

    @Field(() => UserPermissionWhereInput, {nullable:true})
    @Type(() => UserPermissionWhereInput)
    where?: UserPermissionWhereInput;
}
