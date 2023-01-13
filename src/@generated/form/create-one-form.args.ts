import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormCreateInput } from './form-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFormArgs {

    @Field(() => FormCreateInput, {nullable:false})
    @Type(() => FormCreateInput)
    data!: FormCreateInput;
}
