import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutPermissionGroupInput } from './permission-create-without-permission-group.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutPermissionGroupInput } from './permission-create-or-connect-without-permission-group.input';
import { PermissionUpsertWithWhereUniqueWithoutPermissionGroupInput } from './permission-upsert-with-where-unique-without-permission-group.input';
import { PermissionCreateManyPermissionGroupInputEnvelope } from './permission-create-many-permission-group-input-envelope.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithWhereUniqueWithoutPermissionGroupInput } from './permission-update-with-where-unique-without-permission-group.input';
import { PermissionUpdateManyWithWhereWithoutPermissionGroupInput } from './permission-update-many-with-where-without-permission-group.input';
import { PermissionScalarWhereInput } from './permission-scalar-where.input';

@InputType()
export class PermissionUpdateManyWithoutPermissionGroupNestedInput {

    @Field(() => [PermissionCreateWithoutPermissionGroupInput], {nullable:true})
    @Type(() => PermissionCreateWithoutPermissionGroupInput)
    create?: Array<PermissionCreateWithoutPermissionGroupInput>;

    @Field(() => [PermissionCreateOrConnectWithoutPermissionGroupInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutPermissionGroupInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutPermissionGroupInput>;

    @Field(() => [PermissionUpsertWithWhereUniqueWithoutPermissionGroupInput], {nullable:true})
    @Type(() => PermissionUpsertWithWhereUniqueWithoutPermissionGroupInput)
    upsert?: Array<PermissionUpsertWithWhereUniqueWithoutPermissionGroupInput>;

    @Field(() => PermissionCreateManyPermissionGroupInputEnvelope, {nullable:true})
    @Type(() => PermissionCreateManyPermissionGroupInputEnvelope)
    createMany?: PermissionCreateManyPermissionGroupInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    set?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    disconnect?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    delete?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionUpdateWithWhereUniqueWithoutPermissionGroupInput], {nullable:true})
    @Type(() => PermissionUpdateWithWhereUniqueWithoutPermissionGroupInput)
    update?: Array<PermissionUpdateWithWhereUniqueWithoutPermissionGroupInput>;

    @Field(() => [PermissionUpdateManyWithWhereWithoutPermissionGroupInput], {nullable:true})
    @Type(() => PermissionUpdateManyWithWhereWithoutPermissionGroupInput)
    updateMany?: Array<PermissionUpdateManyWithWhereWithoutPermissionGroupInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    @Type(() => PermissionScalarWhereInput)
    deleteMany?: Array<PermissionScalarWhereInput>;
}
