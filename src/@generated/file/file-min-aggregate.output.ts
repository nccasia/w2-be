import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';

@ObjectType()
export class FileMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    filename?: string;

    @Field(() => FileType, {nullable:true})
    fileType?: keyof typeof FileType;

    @Field(() => String, {nullable:true})
    mimetype?: string;

    @Field(() => String, {nullable:true})
    encoding?: string;

    @Field(() => String, {nullable:true})
    data?: string;

    @Field(() => String, {nullable:true})
    cdnUrl?: string;

    @Field(() => String, {nullable:true})
    varantName?: string;

    @Field(() => String, {nullable:true})
    variantKey?: string;

    @Field(() => String, {nullable:true})
    variantValue?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    variantOfId?: number;

    @Field(() => Int, {nullable:true})
    organizationId?: number;
}
