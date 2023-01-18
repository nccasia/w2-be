import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormDefinetionUpdateWithoutTaskDefinitionsInput } from './form-definetion-update-without-task-definitions.input';
import { Type } from 'class-transformer';
import { FormDefinetionCreateWithoutTaskDefinitionsInput } from './form-definetion-create-without-task-definitions.input';

@InputType()
export class FormDefinetionUpsertWithoutTaskDefinitionsInput {

    @Field(() => FormDefinetionUpdateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => FormDefinetionUpdateWithoutTaskDefinitionsInput)
    update!: FormDefinetionUpdateWithoutTaskDefinitionsInput;

    @Field(() => FormDefinetionCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => FormDefinetionCreateWithoutTaskDefinitionsInput)
    create!: FormDefinetionCreateWithoutTaskDefinitionsInput;
}
