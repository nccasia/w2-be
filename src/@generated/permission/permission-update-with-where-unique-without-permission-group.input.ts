import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutPermissionGroupInput } from './permission-update-without-permission-group.input';

@InputType()
export class PermissionUpdateWithWhereUniqueWithoutPermissionGroupInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutPermissionGroupInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutPermissionGroupInput)
    data!: PermissionUpdateWithoutPermissionGroupInput;
}
