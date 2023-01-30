import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormCreateWithoutTasksInput } from './form-create-without-tasks.input';
import { Type } from 'class-transformer';
import { FormCreateOrConnectWithoutTasksInput } from './form-create-or-connect-without-tasks.input';
import { FormUpsertWithoutTasksInput } from './form-upsert-without-tasks.input';
import { FormWhereUniqueInput } from './form-where-unique.input';
import { FormUpdateWithoutTasksInput } from './form-update-without-tasks.input';

@InputType()
export class FormUpdateOneWithoutTasksNestedInput {

    @Field(() => FormCreateWithoutTasksInput, {nullable:true})
    @Type(() => FormCreateWithoutTasksInput)
    create?: FormCreateWithoutTasksInput;

    @Field(() => FormCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => FormCreateOrConnectWithoutTasksInput)
    connectOrCreate?: FormCreateOrConnectWithoutTasksInput;

    @Field(() => FormUpsertWithoutTasksInput, {nullable:true})
    @Type(() => FormUpsertWithoutTasksInput)
    upsert?: FormUpsertWithoutTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FormWhereUniqueInput, {nullable:true})
    @Type(() => FormWhereUniqueInput)
    connect?: FormWhereUniqueInput;

    @Field(() => FormUpdateWithoutTasksInput, {nullable:true})
    @Type(() => FormUpdateWithoutTasksInput)
    update?: FormUpdateWithoutTasksInput;
}
