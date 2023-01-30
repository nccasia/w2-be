import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupWhereInput } from './permission-group-where.input';
import { Type } from 'class-transformer';
import { PermissionGroupOrderByWithRelationInput } from './permission-group-order-by-with-relation.input';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionGroupScalarFieldEnum } from './permission-group-scalar-field.enum';

@ArgsType()
export class FindFirstPermissionGroupOrThrowArgs {

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    @Type(() => PermissionGroupWhereInput)
    where?: PermissionGroupWhereInput;

    @Field(() => [PermissionGroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermissionGroupOrderByWithRelationInput>;

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:true})
    cursor?: PermissionGroupWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PermissionGroupScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PermissionGroupScalarFieldEnum>;
}
