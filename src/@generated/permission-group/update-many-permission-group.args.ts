import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupUpdateManyMutationInput } from './permission-group-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PermissionGroupWhereInput } from './permission-group-where.input';

@ArgsType()
export class UpdateManyPermissionGroupArgs {

    @Field(() => PermissionGroupUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionGroupUpdateManyMutationInput)
    data!: PermissionGroupUpdateManyMutationInput;

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    @Type(() => PermissionGroupWhereInput)
    where?: PermissionGroupWhereInput;
}
