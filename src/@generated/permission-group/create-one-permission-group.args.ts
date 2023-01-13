import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupCreateInput } from './permission-group-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePermissionGroupArgs {

    @Field(() => PermissionGroupCreateInput, {nullable:false})
    @Type(() => PermissionGroupCreateInput)
    data!: PermissionGroupCreateInput;
}
