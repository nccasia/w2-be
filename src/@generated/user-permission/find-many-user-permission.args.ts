import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionWhereInput } from './user-permission-where.input';
import { Type } from 'class-transformer';
import { UserPermissionOrderByWithRelationInput } from './user-permission-order-by-with-relation.input';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserPermissionScalarFieldEnum } from './user-permission-scalar-field.enum';

@ArgsType()
export class FindManyUserPermissionArgs {

    @Field(() => UserPermissionWhereInput, {nullable:true})
    @Type(() => UserPermissionWhereInput)
    where?: UserPermissionWhereInput;

    @Field(() => [UserPermissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserPermissionOrderByWithRelationInput>;

    @Field(() => UserPermissionWhereUniqueInput, {nullable:true})
    cursor?: UserPermissionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserPermissionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserPermissionScalarFieldEnum>;
}
