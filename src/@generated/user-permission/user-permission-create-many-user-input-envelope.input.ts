import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionCreateManyUserInput } from './user-permission-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserPermissionCreateManyUserInputEnvelope {

    @Field(() => [UserPermissionCreateManyUserInput], {nullable:false})
    @Type(() => UserPermissionCreateManyUserInput)
    data!: Array<UserPermissionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
