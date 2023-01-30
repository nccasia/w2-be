import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormWhereUniqueInput } from './form-where-unique.input';
import { Type } from 'class-transformer';
import { FormCreateWithoutTasksInput } from './form-create-without-tasks.input';

@InputType()
export class FormCreateOrConnectWithoutTasksInput {

    @Field(() => FormWhereUniqueInput, {nullable:false})
    @Type(() => FormWhereUniqueInput)
    where!: FormWhereUniqueInput;

    @Field(() => FormCreateWithoutTasksInput, {nullable:false})
    @Type(() => FormCreateWithoutTasksInput)
    create!: FormCreateWithoutTasksInput;
}
