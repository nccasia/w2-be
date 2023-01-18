import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionUpdateInput } from './form-definetion-update.input';
import { Type } from 'class-transformer';
import { FormDefinetionWhereUniqueInput } from './form-definetion-where-unique.input';

@ArgsType()
export class UpdateOneFormDefinetionArgs {

    @Field(() => FormDefinetionUpdateInput, {nullable:false})
    @Type(() => FormDefinetionUpdateInput)
    data!: FormDefinetionUpdateInput;

    @Field(() => FormDefinetionWhereUniqueInput, {nullable:false})
    @Type(() => FormDefinetionWhereUniqueInput)
    where!: FormDefinetionWhereUniqueInput;
}
