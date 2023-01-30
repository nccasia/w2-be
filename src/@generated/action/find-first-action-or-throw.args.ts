import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActionWhereInput } from './action-where.input';
import { Type } from 'class-transformer';
import { ActionOrderByWithRelationInput } from './action-order-by-with-relation.input';
import { ActionWhereUniqueInput } from './action-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActionScalarFieldEnum } from './action-scalar-field.enum';

@ArgsType()
export class FindFirstActionOrThrowArgs {

    @Field(() => ActionWhereInput, {nullable:true})
    @Type(() => ActionWhereInput)
    where?: ActionWhereInput;

    @Field(() => [ActionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActionOrderByWithRelationInput>;

    @Field(() => ActionWhereUniqueInput, {nullable:true})
    cursor?: ActionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ActionScalarFieldEnum>;
}
