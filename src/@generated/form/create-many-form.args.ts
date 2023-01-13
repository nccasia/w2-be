import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormCreateManyInput } from './form-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFormArgs {

    @Field(() => [FormCreateManyInput], {nullable:false})
    @Type(() => FormCreateManyInput)
    data!: Array<FormCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
