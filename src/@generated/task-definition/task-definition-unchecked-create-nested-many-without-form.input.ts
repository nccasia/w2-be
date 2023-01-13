import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutFormInput } from './task-definition-create-without-form.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutFormInput } from './task-definition-create-or-connect-without-form.input';
import { TaskDefinitionCreateManyFormInputEnvelope } from './task-definition-create-many-form-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionUncheckedCreateNestedManyWithoutFormInput {

    @Field(() => [TaskDefinitionCreateWithoutFormInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutFormInput)
    create?: Array<TaskDefinitionCreateWithoutFormInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutFormInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutFormInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutFormInput>;

    @Field(() => TaskDefinitionCreateManyFormInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyFormInputEnvelope)
    createMany?: TaskDefinitionCreateManyFormInputEnvelope;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionWhereUniqueInput>;
}
