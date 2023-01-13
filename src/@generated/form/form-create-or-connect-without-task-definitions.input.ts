import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormWhereUniqueInput } from './form-where-unique.input';
import { Type } from 'class-transformer';
import { FormCreateWithoutTaskDefinitionsInput } from './form-create-without-task-definitions.input';

@InputType()
export class FormCreateOrConnectWithoutTaskDefinitionsInput {

    @Field(() => FormWhereUniqueInput, {nullable:false})
    @Type(() => FormWhereUniqueInput)
    where!: FormWhereUniqueInput;

    @Field(() => FormCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => FormCreateWithoutTaskDefinitionsInput)
    create!: FormCreateWithoutTaskDefinitionsInput;
}
