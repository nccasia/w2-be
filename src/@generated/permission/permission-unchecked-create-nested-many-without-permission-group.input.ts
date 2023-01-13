import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutPermissionGroupInput } from './permission-create-without-permission-group.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutPermissionGroupInput } from './permission-create-or-connect-without-permission-group.input';
import { PermissionCreateManyPermissionGroupInputEnvelope } from './permission-create-many-permission-group-input-envelope.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUncheckedCreateNestedManyWithoutPermissionGroupInput {

    @Field(() => [PermissionCreateWithoutPermissionGroupInput], {nullable:true})
    @Type(() => PermissionCreateWithoutPermissionGroupInput)
    create?: Array<PermissionCreateWithoutPermissionGroupInput>;

    @Field(() => [PermissionCreateOrConnectWithoutPermissionGroupInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutPermissionGroupInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutPermissionGroupInput>;

    @Field(() => PermissionCreateManyPermissionGroupInputEnvelope, {nullable:true})
    @Type(() => PermissionCreateManyPermissionGroupInputEnvelope)
    createMany?: PermissionCreateManyPermissionGroupInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Array<PermissionWhereUniqueInput>;
}
