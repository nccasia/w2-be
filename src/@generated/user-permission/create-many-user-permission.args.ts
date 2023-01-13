import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionCreateManyInput } from './user-permission-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserPermissionArgs {

    @Field(() => [UserPermissionCreateManyInput], {nullable:false})
    @Type(() => UserPermissionCreateManyInput)
    data!: Array<UserPermissionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
