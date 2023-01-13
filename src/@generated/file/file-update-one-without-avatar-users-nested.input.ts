import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAvatarUsersInput } from './file-create-without-avatar-users.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutAvatarUsersInput } from './file-create-or-connect-without-avatar-users.input';
import { FileUpsertWithoutAvatarUsersInput } from './file-upsert-without-avatar-users.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutAvatarUsersInput } from './file-update-without-avatar-users.input';

@InputType()
export class FileUpdateOneWithoutAvatarUsersNestedInput {

    @Field(() => FileCreateWithoutAvatarUsersInput, {nullable:true})
    @Type(() => FileCreateWithoutAvatarUsersInput)
    create?: FileCreateWithoutAvatarUsersInput;

    @Field(() => FileCreateOrConnectWithoutAvatarUsersInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutAvatarUsersInput)
    connectOrCreate?: FileCreateOrConnectWithoutAvatarUsersInput;

    @Field(() => FileUpsertWithoutAvatarUsersInput, {nullable:true})
    @Type(() => FileUpsertWithoutAvatarUsersInput)
    upsert?: FileUpsertWithoutAvatarUsersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutAvatarUsersInput, {nullable:true})
    @Type(() => FileUpdateWithoutAvatarUsersInput)
    update?: FileUpdateWithoutAvatarUsersInput;
}
