import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionWhereUniqueInput } from './form-definetion-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFormDefinetionArgs {

    @Field(() => FormDefinetionWhereUniqueInput, {nullable:false})
    @Type(() => FormDefinetionWhereUniqueInput)
    where!: FormDefinetionWhereUniqueInput;
}
