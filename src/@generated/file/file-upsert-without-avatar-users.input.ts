import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutAvatarUsersInput } from './file-update-without-avatar-users.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutAvatarUsersInput } from './file-create-without-avatar-users.input';

@InputType()
export class FileUpsertWithoutAvatarUsersInput {

    @Field(() => FileUpdateWithoutAvatarUsersInput, {nullable:false})
    @Type(() => FileUpdateWithoutAvatarUsersInput)
    update!: FileUpdateWithoutAvatarUsersInput;

    @Field(() => FileCreateWithoutAvatarUsersInput, {nullable:false})
    @Type(() => FileCreateWithoutAvatarUsersInput)
    create!: FileCreateWithoutAvatarUsersInput;
}
