import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormUpdateWithoutTasksInput } from './form-update-without-tasks.input';
import { Type } from 'class-transformer';
import { FormCreateWithoutTasksInput } from './form-create-without-tasks.input';

@InputType()
export class FormUpsertWithoutTasksInput {

    @Field(() => FormUpdateWithoutTasksInput, {nullable:false})
    @Type(() => FormUpdateWithoutTasksInput)
    update!: FormUpdateWithoutTasksInput;

    @Field(() => FormCreateWithoutTasksInput, {nullable:false})
    @Type(() => FormCreateWithoutTasksInput)
    create!: FormCreateWithoutTasksInput;
}
