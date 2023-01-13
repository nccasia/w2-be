import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePermissionGroupArgs {

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:false})
    @Type(() => PermissionGroupWhereUniqueInput)
    where!: PermissionGroupWhereUniqueInput;
}
