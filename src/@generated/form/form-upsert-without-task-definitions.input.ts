import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormUpdateWithoutTaskDefinitionsInput } from './form-update-without-task-definitions.input';
import { Type } from 'class-transformer';
import { FormCreateWithoutTaskDefinitionsInput } from './form-create-without-task-definitions.input';

@InputType()
export class FormUpsertWithoutTaskDefinitionsInput {

    @Field(() => FormUpdateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => FormUpdateWithoutTaskDefinitionsInput)
    update!: FormUpdateWithoutTaskDefinitionsInput;

    @Field(() => FormCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => FormCreateWithoutTaskDefinitionsInput)
    create!: FormCreateWithoutTaskDefinitionsInput;
}
