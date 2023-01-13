import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormCreateWithoutTaskDefinitionsInput } from './form-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { FormCreateOrConnectWithoutTaskDefinitionsInput } from './form-create-or-connect-without-task-definitions.input';
import { FormWhereUniqueInput } from './form-where-unique.input';

@InputType()
export class FormCreateNestedOneWithoutTaskDefinitionsInput {

    @Field(() => FormCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormCreateWithoutTaskDefinitionsInput)
    create?: FormCreateWithoutTaskDefinitionsInput;

    @Field(() => FormCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: FormCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => FormWhereUniqueInput, {nullable:true})
    @Type(() => FormWhereUniqueInput)
    connect?: FormWhereUniqueInput;
}
