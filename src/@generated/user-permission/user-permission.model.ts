import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Permission } from '../permission/permission.model';
import { User } from '../user/user.model';

@ObjectType()
export class UserPermission {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Permission, {nullable:false})
    permission?: Permission;

    @Field(() => User, {nullable:false})
    user?: User;
}
