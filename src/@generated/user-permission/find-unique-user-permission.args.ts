import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserPermissionArgs {

    @Field(() => UserPermissionWhereUniqueInput, {nullable:false})
    @Type(() => UserPermissionWhereUniqueInput)
    where!: UserPermissionWhereUniqueInput;
}
