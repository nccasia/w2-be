import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionWhereInput } from './user-permission-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserPermissionArgs {

    @Field(() => UserPermissionWhereInput, {nullable:true})
    @Type(() => UserPermissionWhereInput)
    where?: UserPermissionWhereInput;
}
