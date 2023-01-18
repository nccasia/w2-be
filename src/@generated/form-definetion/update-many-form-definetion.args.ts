import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionUpdateManyMutationInput } from './form-definetion-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FormDefinetionWhereInput } from './form-definetion-where.input';

@ArgsType()
export class UpdateManyFormDefinetionArgs {

    @Field(() => FormDefinetionUpdateManyMutationInput, {nullable:false})
    @Type(() => FormDefinetionUpdateManyMutationInput)
    data!: FormDefinetionUpdateManyMutationInput;

    @Field(() => FormDefinetionWhereInput, {nullable:true})
    @Type(() => FormDefinetionWhereInput)
    where?: FormDefinetionWhereInput;
}
