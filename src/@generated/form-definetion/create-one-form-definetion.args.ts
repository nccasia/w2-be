import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionCreateInput } from './form-definetion-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFormDefinetionArgs {

    @Field(() => FormDefinetionCreateInput, {nullable:false})
    @Type(() => FormDefinetionCreateInput)
    data!: FormDefinetionCreateInput;
}
