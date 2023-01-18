import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionWhereInput } from './form-definetion-where.input';
import { Type } from 'class-transformer';
import { FormDefinetionOrderByWithRelationInput } from './form-definetion-order-by-with-relation.input';
import { FormDefinetionWhereUniqueInput } from './form-definetion-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormDefinetionScalarFieldEnum } from './form-definetion-scalar-field.enum';

@ArgsType()
export class FindManyFormDefinetionArgs {

    @Field(() => FormDefinetionWhereInput, {nullable:true})
    @Type(() => FormDefinetionWhereInput)
    where?: FormDefinetionWhereInput;

    @Field(() => [FormDefinetionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormDefinetionOrderByWithRelationInput>;

    @Field(() => FormDefinetionWhereUniqueInput, {nullable:true})
    cursor?: FormDefinetionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FormDefinetionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FormDefinetionScalarFieldEnum>;
}
