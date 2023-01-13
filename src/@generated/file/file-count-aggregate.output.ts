import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FileCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    filename!: number;

    @Field(() => Int, {nullable:false})
    fileType!: number;

    @Field(() => Int, {nullable:false})
    mimetype!: number;

    @Field(() => Int, {nullable:false})
    encoding!: number;

    @Field(() => Int, {nullable:false})
    data!: number;

    @Field(() => Int, {nullable:false})
    cdnUrl!: number;

    @Field(() => Int, {nullable:false})
    varantName!: number;

    @Field(() => Int, {nullable:false})
    variantKey!: number;

    @Field(() => Int, {nullable:false})
    variantValue!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    variantOfId!: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
