import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupWhereInput } from './permission-group-where.input';

@InputType()
export class PermissionGroupRelationFilter {

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    is?: PermissionGroupWhereInput;

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    isNot?: PermissionGroupWhereInput;
}
