import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormUpdateManyMutationInput } from './form-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FormWhereInput } from './form-where.input';

@ArgsType()
export class UpdateManyFormArgs {

    @Field(() => FormUpdateManyMutationInput, {nullable:false})
    @Type(() => FormUpdateManyMutationInput)
    data!: FormUpdateManyMutationInput;

    @Field(() => FormWhereInput, {nullable:true})
    @Type(() => FormWhereInput)
    where?: FormWhereInput;
}
