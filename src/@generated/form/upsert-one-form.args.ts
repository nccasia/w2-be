import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormWhereUniqueInput } from './form-where-unique.input';
import { Type } from 'class-transformer';
import { FormCreateInput } from './form-create.input';
import { FormUpdateInput } from './form-update.input';

@ArgsType()
export class UpsertOneFormArgs {

    @Field(() => FormWhereUniqueInput, {nullable:false})
    @Type(() => FormWhereUniqueInput)
    where!: FormWhereUniqueInput;

    @Field(() => FormCreateInput, {nullable:false})
    @Type(() => FormCreateInput)
    create!: FormCreateInput;

    @Field(() => FormUpdateInput, {nullable:false})
    @Type(() => FormUpdateInput)
    update!: FormUpdateInput;
}
