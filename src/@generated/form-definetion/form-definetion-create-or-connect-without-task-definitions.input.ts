import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormDefinetionWhereUniqueInput } from './form-definetion-where-unique.input';
import { Type } from 'class-transformer';
import { FormDefinetionCreateWithoutTaskDefinitionsInput } from './form-definetion-create-without-task-definitions.input';

@InputType()
export class FormDefinetionCreateOrConnectWithoutTaskDefinitionsInput {

    @Field(() => FormDefinetionWhereUniqueInput, {nullable:false})
    @Type(() => FormDefinetionWhereUniqueInput)
    where!: FormDefinetionWhereUniqueInput;

    @Field(() => FormDefinetionCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => FormDefinetionCreateWithoutTaskDefinitionsInput)
    create!: FormDefinetionCreateWithoutTaskDefinitionsInput;
}
