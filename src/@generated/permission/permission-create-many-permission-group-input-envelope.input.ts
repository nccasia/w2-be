import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateManyPermissionGroupInput } from './permission-create-many-permission-group.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionCreateManyPermissionGroupInputEnvelope {

    @Field(() => [PermissionCreateManyPermissionGroupInput], {nullable:false})
    @Type(() => PermissionCreateManyPermissionGroupInput)
    data!: Array<PermissionCreateManyPermissionGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
