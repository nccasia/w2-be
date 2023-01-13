import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutAvatarUsersInput } from './file-create-without-avatar-users.input';

@InputType()
export class FileCreateOrConnectWithoutAvatarUsersInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutAvatarUsersInput, {nullable:false})
    @Type(() => FileCreateWithoutAvatarUsersInput)
    create!: FileCreateWithoutAvatarUsersInput;
}
