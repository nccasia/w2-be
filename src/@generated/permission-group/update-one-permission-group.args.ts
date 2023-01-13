import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupUpdateInput } from './permission-group-update.input';
import { Type } from 'class-transformer';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';

@ArgsType()
export class UpdateOnePermissionGroupArgs {

    @Field(() => PermissionGroupUpdateInput, {nullable:false})
    @Type(() => PermissionGroupUpdateInput)
    data!: PermissionGroupUpdateInput;

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:false})
    @Type(() => PermissionGroupWhereUniqueInput)
    where!: PermissionGroupWhereUniqueInput;
}
