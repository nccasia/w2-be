import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionCreateManyInput } from './form-definetion-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFormDefinetionArgs {

    @Field(() => [FormDefinetionCreateManyInput], {nullable:false})
    @Type(() => FormDefinetionCreateManyInput)
    data!: Array<FormDefinetionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
