import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormDefinetionWhereInput } from './form-definetion-where.input';

@InputType()
export class FormDefinetionRelationFilter {

    @Field(() => FormDefinetionWhereInput, {nullable:true})
    is?: FormDefinetionWhereInput;

    @Field(() => FormDefinetionWhereInput, {nullable:true})
    isNot?: FormDefinetionWhereInput;
}
