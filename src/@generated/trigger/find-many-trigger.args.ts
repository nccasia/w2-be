import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TriggerWhereInput } from './trigger-where.input';
import { Type } from 'class-transformer';
import { TriggerOrderByWithRelationInput } from './trigger-order-by-with-relation.input';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TriggerScalarFieldEnum } from './trigger-scalar-field.enum';

@ArgsType()
export class FindManyTriggerArgs {

    @Field(() => TriggerWhereInput, {nullable:true})
    @Type(() => TriggerWhereInput)
    where?: TriggerWhereInput;

    @Field(() => [TriggerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TriggerOrderByWithRelationInput>;

    @Field(() => TriggerWhereUniqueInput, {nullable:true})
    cursor?: TriggerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TriggerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TriggerScalarFieldEnum>;
}
