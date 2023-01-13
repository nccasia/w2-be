import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionUpdateInput } from './user-permission-update.input';
import { Type } from 'class-transformer';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';

@ArgsType()
export class UpdateOneUserPermissionArgs {

    @Field(() => UserPermissionUpdateInput, {nullable:false})
    @Type(() => UserPermissionUpdateInput)
    data!: UserPermissionUpdateInput;

    @Field(() => UserPermissionWhereUniqueInput, {nullable:false})
    @Type(() => UserPermissionWhereUniqueInput)
    where!: UserPermissionWhereUniqueInput;
}
