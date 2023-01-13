import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionWhereInput } from './user-permission-where.input';

@InputType()
export class UserPermissionListRelationFilter {

    @Field(() => UserPermissionWhereInput, {nullable:true})
    every?: UserPermissionWhereInput;

    @Field(() => UserPermissionWhereInput, {nullable:true})
    some?: UserPermissionWhereInput;

    @Field(() => UserPermissionWhereInput, {nullable:true})
    none?: UserPermissionWhereInput;
}
