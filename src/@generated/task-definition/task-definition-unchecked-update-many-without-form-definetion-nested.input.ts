import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutFormDefinetionInput } from './task-definition-create-without-form-definetion.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutFormDefinetionInput } from './task-definition-create-or-connect-without-form-definetion.input';
import { TaskDefinitionUpsertWithWhereUniqueWithoutFormDefinetionInput } from './task-definition-upsert-with-where-unique-without-form-definetion.input';
import { TaskDefinitionCreateManyFormDefinetionInputEnvelope } from './task-definition-create-many-form-definetion-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithWhereUniqueWithoutFormDefinetionInput } from './task-definition-update-with-where-unique-without-form-definetion.input';
import { TaskDefinitionUpdateManyWithWhereWithoutFormDefinetionInput } from './task-definition-update-many-with-where-without-form-definetion.input';
import { TaskDefinitionScalarWhereInput } from './task-definition-scalar-where.input';

@InputType()
export class TaskDefinitionUncheckedUpdateManyWithoutFormDefinetionNestedInput {

    @Field(() => [TaskDefinitionCreateWithoutFormDefinetionInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutFormDefinetionInput)
    create?: Array<TaskDefinitionCreateWithoutFormDefinetionInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutFormDefinetionInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutFormDefinetionInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutFormDefinetionInput>;

    @Field(() => [TaskDefinitionUpsertWithWhereUniqueWithoutFormDefinetionInput], {nullable:true})
    @Type(() => TaskDefinitionUpsertWithWhereUniqueWithoutFormDefinetionInput)
    upsert?: Array<TaskDefinitionUpsertWithWhereUniqueWithoutFormDefinetionInput>;

    @Field(() => TaskDefinitionCreateManyFormDefinetionInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyFormDefinetionInputEnvelope)
    createMany?: TaskDefinitionCreateManyFormDefinetionInputEnvelope;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    set?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    disconnect?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    delete?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionUpdateWithWhereUniqueWithoutFormDefinetionInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateWithWhereUniqueWithoutFormDefinetionInput)
    update?: Array<TaskDefinitionUpdateWithWhereUniqueWithoutFormDefinetionInput>;

    @Field(() => [TaskDefinitionUpdateManyWithWhereWithoutFormDefinetionInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateManyWithWhereWithoutFormDefinetionInput)
    updateMany?: Array<TaskDefinitionUpdateManyWithWhereWithoutFormDefinetionInput>;

    @Field(() => [TaskDefinitionScalarWhereInput], {nullable:true})
    @Type(() => TaskDefinitionScalarWhereInput)
    deleteMany?: Array<TaskDefinitionScalarWhereInput>;
}
