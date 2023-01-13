import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { FileCountAggregate } from './file-count-aggregate.output';
import { FileAvgAggregate } from './file-avg-aggregate.output';
import { FileSumAggregate } from './file-sum-aggregate.output';
import { FileMinAggregate } from './file-min-aggregate.output';
import { FileMaxAggregate } from './file-max-aggregate.output';

@ObjectType()
export class FileGroupBy {

    @Field(() => Int, {nullable:false})
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
    varantName?: string;

    @Field(() => String, {nullable:true})
    variantKey?: string;

    @Field(() => String, {nullable:true})
    variantValue?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    variantOfId?: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => FileCountAggregate, {nullable:true})
    _count?: FileCountAggregate;

    @Field(() => FileAvgAggregate, {nullable:true})
    _avg?: FileAvgAggregate;

    @Field(() => FileSumAggregate, {nullable:true})
    _sum?: FileSumAggregate;

    @Field(() => FileMinAggregate, {nullable:true})
    _min?: FileMinAggregate;

    @Field(() => FileMaxAggregate, {nullable:true})
    _max?: FileMaxAggregate;
}
