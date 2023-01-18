import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormDefinetionCreateWithoutTaskDefinitionsInput } from './form-definetion-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { FormDefinetionCreateOrConnectWithoutTaskDefinitionsInput } from './form-definetion-create-or-connect-without-task-definitions.input';
import { FormDefinetionWhereUniqueInput } from './form-definetion-where-unique.input';

@InputType()
export class FormDefinetionCreateNestedOneWithoutTaskDefinitionsInput {

    @Field(() => FormDefinetionCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormDefinetionCreateWithoutTaskDefinitionsInput)
    create?: FormDefinetionCreateWithoutTaskDefinitionsInput;

    @Field(() => FormDefinetionCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormDefinetionCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: FormDefinetionCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => FormDefinetionWhereUniqueInput, {nullable:true})
    @Type(() => FormDefinetionWhereUniqueInput)
    connect?: FormDefinetionWhereUniqueInput;
}
