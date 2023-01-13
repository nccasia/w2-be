import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormWhereInput } from './form-where.input';
import { Type } from 'class-transformer';
import { FormOrderByWithRelationInput } from './form-order-by-with-relation.input';
import { FormWhereUniqueInput } from './form-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormScalarFieldEnum } from './form-scalar-field.enum';

@ArgsType()
export class FindFirstFormArgs {

    @Field(() => FormWhereInput, {nullable:true})
    @Type(() => FormWhereInput)
    where?: FormWhereInput;

    @Field(() => [FormOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormOrderByWithRelationInput>;

    @Field(() => FormWhereUniqueInput, {nullable:true})
    cursor?: FormWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FormScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FormScalarFieldEnum>;
}
