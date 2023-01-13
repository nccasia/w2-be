import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormUpdateInput } from './form-update.input';
import { Type } from 'class-transformer';
import { FormWhereUniqueInput } from './form-where-unique.input';

@ArgsType()
export class UpdateOneFormArgs {

    @Field(() => FormUpdateInput, {nullable:false})
    @Type(() => FormUpdateInput)
    data!: FormUpdateInput;

    @Field(() => FormWhereUniqueInput, {nullable:false})
    @Type(() => FormWhereUniqueInput)
    where!: FormWhereUniqueInput;
}
