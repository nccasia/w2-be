import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionCreateManyPermissionInput } from './user-permission-create-many-permission.input';
import { Type } from 'class-transformer';

@InputType()
export class UserPermissionCreateManyPermissionInputEnvelope {

    @Field(() => [UserPermissionCreateManyPermissionInput], {nullable:false})
    @Type(() => UserPermissionCreateManyPermissionInput)
    data!: Array<UserPermissionCreateManyPermissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
