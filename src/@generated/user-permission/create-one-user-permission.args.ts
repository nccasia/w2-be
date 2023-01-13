import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionCreateInput } from './user-permission-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserPermissionArgs {

    @Field(() => UserPermissionCreateInput, {nullable:false})
    @Type(() => UserPermissionCreateInput)
    data!: UserPermissionCreateInput;
}
