import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Int } from '@nestjs/graphql';
import { Organization } from '../organization/organization.model';
import { User } from '../user/user.model';
import { FileCount } from './file-count.output';

@ObjectType()
export class File {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    filename!: string;

    @Field(() => FileType, {nullable:false})
    fileType!: keyof typeof FileType;

    @Field(() => String, {nullable:false})
    mimetype!: string;

    @Field(() => String, {nullable:false})
    encoding!: string;

    @Field(() => String, {nullable:false})
    data!: string;

    @Field(() => String, {nullable:false})
    cdnUrl!: string;

    @Field(() => String, {nullable:true})
    varantName!: string | null;

    @Field(() => String, {nullable:true})
    variantKey!: string | null;

    @Field(() => String, {nullable:true})
    variantValue!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    variantOfId!: number | null;

    @Field(() => File, {nullable:true})
    variantOf?: File | null;

    @Field(() => [File], {nullable:true})
    variants?: Array<File>;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => [User], {nullable:true})
    avatarUsers?: Array<User>;

    @Field(() => FileCount, {nullable:false})
    _count?: FileCount;
}
