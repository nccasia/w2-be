import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionWhereInput } from './form-definetion-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFormDefinetionArgs {

    @Field(() => FormDefinetionWhereInput, {nullable:true})
    @Type(() => FormDefinetionWhereInput)
    where?: FormDefinetionWhereInput;
}
