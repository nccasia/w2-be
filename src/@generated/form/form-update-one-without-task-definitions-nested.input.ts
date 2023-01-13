import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormCreateWithoutTaskDefinitionsInput } from './form-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { FormCreateOrConnectWithoutTaskDefinitionsInput } from './form-create-or-connect-without-task-definitions.input';
import { FormUpsertWithoutTaskDefinitionsInput } from './form-upsert-without-task-definitions.input';
import { FormWhereUniqueInput } from './form-where-unique.input';
import { FormUpdateWithoutTaskDefinitionsInput } from './form-update-without-task-definitions.input';

@InputType()
export class FormUpdateOneWithoutTaskDefinitionsNestedInput {

    @Field(() => FormCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormCreateWithoutTaskDefinitionsInput)
    create?: FormCreateWithoutTaskDefinitionsInput;

    @Field(() => FormCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: FormCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => FormUpsertWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormUpsertWithoutTaskDefinitionsInput)
    upsert?: FormUpsertWithoutTaskDefinitionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FormWhereUniqueInput, {nullable:true})
    @Type(() => FormWhereUniqueInput)
    connect?: FormWhereUniqueInput;

    @Field(() => FormUpdateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormUpdateWithoutTaskDefinitionsInput)
    update?: FormUpdateWithoutTaskDefinitionsInput;
}
