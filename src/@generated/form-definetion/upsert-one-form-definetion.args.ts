import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionWhereUniqueInput } from './form-definetion-where-unique.input';
import { Type } from 'class-transformer';
import { FormDefinetionCreateInput } from './form-definetion-create.input';
import { FormDefinetionUpdateInput } from './form-definetion-update.input';

@ArgsType()
export class UpsertOneFormDefinetionArgs {

    @Field(() => FormDefinetionWhereUniqueInput, {nullable:false})
    @Type(() => FormDefinetionWhereUniqueInput)
    where!: FormDefinetionWhereUniqueInput;

    @Field(() => FormDefinetionCreateInput, {nullable:false})
    @Type(() => FormDefinetionCreateInput)
    create!: FormDefinetionCreateInput;

    @Field(() => FormDefinetionUpdateInput, {nullable:false})
    @Type(() => FormDefinetionUpdateInput)
    update!: FormDefinetionUpdateInput;
}
