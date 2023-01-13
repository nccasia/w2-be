import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormWhereInput } from './form-where.input';

@InputType()
export class FormRelationFilter {

    @Field(() => FormWhereInput, {nullable:true})
    is?: FormWhereInput;

    @Field(() => FormWhereInput, {nullable:true})
    isNot?: FormWhereInput;
}
