import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { Type } from 'class-transformer';
import { UserPermissionCreateInput } from './user-permission-create.input';
import { UserPermissionUpdateInput } from './user-permission-update.input';

@ArgsType()
export class UpsertOneUserPermissionArgs {

    @Field(() => UserPermissionWhereUniqueInput, {nullable:false})
    @Type(() => UserPermissionWhereUniqueInput)
    where!: UserPermissionWhereUniqueInput;

    @Field(() => UserPermissionCreateInput, {nullable:false})
    @Type(() => UserPermissionCreateInput)
    create!: UserPermissionCreateInput;

    @Field(() => UserPermissionUpdateInput, {nullable:false})
    @Type(() => UserPermissionUpdateInput)
    update!: UserPermissionUpdateInput;
}
