import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FileMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    filename?: true;

    @Field(() => Boolean, {nullable:true})
    fileType?: true;

    @Field(() => Boolean, {nullable:true})
    mimetype?: true;

    @Field(() => Boolean, {nullable:true})
    encoding?: true;

    @Field(() => Boolean, {nullable:true})
    data?: true;

    @Field(() => Boolean, {nullable:true})
    cdnUrl?: true;

    @Field(() => Boolean, {nullable:true})
    varantName?: true;

    @Field(() => Boolean, {nullable:true})
    variantKey?: true;

    @Field(() => Boolean, {nullable:true})
    variantValue?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    variantOfId?: true;

    @Field(() => Boolean, {nullable:true})
    organizationId?: true;
}
