import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAvatarUsersInput } from './file-create-without-avatar-users.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutAvatarUsersInput } from './file-create-or-connect-without-avatar-users.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutAvatarUsersInput {

    @Field(() => FileCreateWithoutAvatarUsersInput, {nullable:true})
    @Type(() => FileCreateWithoutAvatarUsersInput)
    create?: FileCreateWithoutAvatarUsersInput;

    @Field(() => FileCreateOrConnectWithoutAvatarUsersInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutAvatarUsersInput)
    connectOrCreate?: FileCreateOrConnectWithoutAvatarUsersInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: FileWhereUniqueInput;
}
