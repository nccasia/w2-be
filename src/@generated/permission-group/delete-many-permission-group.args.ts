import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupWhereInput } from './permission-group-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPermissionGroupArgs {

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    @Type(() => PermissionGroupWhereInput)
    where?: PermissionGroupWhereInput;
}
