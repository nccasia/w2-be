import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupCreateManyInput } from './permission-group-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPermissionGroupArgs {

    @Field(() => [PermissionGroupCreateManyInput], {nullable:false})
    @Type(() => PermissionGroupCreateManyInput)
    data!: Array<PermissionGroupCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
