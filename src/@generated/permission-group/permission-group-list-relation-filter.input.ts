import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupWhereInput } from './permission-group-where.input';

@InputType()
export class PermissionGroupListRelationFilter {

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    every?: PermissionGroupWhereInput;

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    some?: PermissionGroupWhereInput;

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    none?: PermissionGroupWhereInput;
}
