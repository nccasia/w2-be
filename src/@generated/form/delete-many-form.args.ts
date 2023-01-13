import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormWhereInput } from './form-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFormArgs {

    @Field(() => FormWhereInput, {nullable:true})
    @Type(() => FormWhereInput)
    where?: FormWhereInput;
}
