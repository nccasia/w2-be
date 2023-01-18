import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormDefinetionCreateWithoutTaskDefinitionsInput } from './form-definetion-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { FormDefinetionCreateOrConnectWithoutTaskDefinitionsInput } from './form-definetion-create-or-connect-without-task-definitions.input';
import { FormDefinetionUpsertWithoutTaskDefinitionsInput } from './form-definetion-upsert-without-task-definitions.input';
import { FormDefinetionWhereUniqueInput } from './form-definetion-where-unique.input';
import { FormDefinetionUpdateWithoutTaskDefinitionsInput } from './form-definetion-update-without-task-definitions.input';

@InputType()
export class FormDefinetionUpdateOneWithoutTaskDefinitionsNestedInput {

    @Field(() => FormDefinetionCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormDefinetionCreateWithoutTaskDefinitionsInput)
    create?: FormDefinetionCreateWithoutTaskDefinitionsInput;

    @Field(() => FormDefinetionCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormDefinetionCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: FormDefinetionCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => FormDefinetionUpsertWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormDefinetionUpsertWithoutTaskDefinitionsInput)
    upsert?: FormDefinetionUpsertWithoutTaskDefinitionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FormDefinetionWhereUniqueInput, {nullable:true})
    @Type(() => FormDefinetionWhereUniqueInput)
    connect?: FormDefinetionWhereUniqueInput;

    @Field(() => FormDefinetionUpdateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => FormDefinetionUpdateWithoutTaskDefinitionsInput)
    update?: FormDefinetionUpdateWithoutTaskDefinitionsInput;
}
