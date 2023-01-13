import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormWhereUniqueInput } from './form-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFormArgs {

    @Field(() => FormWhereUniqueInput, {nullable:false})
    @Type(() => FormWhereUniqueInput)
    where!: FormWhereUniqueInput;
}
