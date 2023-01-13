import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionGroupCreateInput } from './permission-group-create.input';
import { PermissionGroupUpdateInput } from './permission-group-update.input';

@ArgsType()
export class UpsertOnePermissionGroupArgs {

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:false})
    @Type(() => PermissionGroupWhereUniqueInput)
    where!: PermissionGroupWhereUniqueInput;

    @Field(() => PermissionGroupCreateInput, {nullable:false})
    @Type(() => PermissionGroupCreateInput)
    create!: PermissionGroupCreateInput;

    @Field(() => PermissionGroupUpdateInput, {nullable:false})
    @Type(() => PermissionGroupUpdateInput)
    update!: PermissionGroupUpdateInput;
}
