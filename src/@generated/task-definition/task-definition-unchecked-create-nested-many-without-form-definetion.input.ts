import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutFormDefinetionInput } from './task-definition-create-without-form-definetion.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutFormDefinetionInput } from './task-definition-create-or-connect-without-form-definetion.input';
import { TaskDefinitionCreateManyFormDefinetionInputEnvelope } from './task-definition-create-many-form-definetion-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionUncheckedCreateNestedManyWithoutFormDefinetionInput {

    @Field(() => [TaskDefinitionCreateWithoutFormDefinetionInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutFormDefinetionInput)
    create?: Array<TaskDefinitionCreateWithoutFormDefinetionInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutFormDefinetionInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutFormDefinetionInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutFormDefinetionInput>;

    @Field(() => TaskDefinitionCreateManyFormDefinetionInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyFormDefinetionInputEnvelope)
    createMany?: TaskDefinitionCreateManyFormDefinetionInputEnvelope;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionWhereUniqueInput>;
}
