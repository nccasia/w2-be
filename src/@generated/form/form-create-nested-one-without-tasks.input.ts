import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormCreateWithoutTasksInput } from './form-create-without-tasks.input';
import { Type } from 'class-transformer';
import { FormCreateOrConnectWithoutTasksInput } from './form-create-or-connect-without-tasks.input';
import { FormWhereUniqueInput } from './form-where-unique.input';

@InputType()
export class FormCreateNestedOneWithoutTasksInput {

    @Field(() => FormCreateWithoutTasksInput, {nullable:true})
    @Type(() => FormCreateWithoutTasksInput)
    create?: FormCreateWithoutTasksInput;

    @Field(() => FormCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => FormCreateOrConnectWithoutTasksInput)
    connectOrCreate?: FormCreateOrConnectWithoutTasksInput;

    @Field(() => FormWhereUniqueInput, {nullable:true})
    @Type(() => FormWhereUniqueInput)
    connect?: FormWhereUniqueInput;
}
