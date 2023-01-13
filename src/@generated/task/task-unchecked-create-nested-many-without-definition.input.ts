import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutDefinitionInput } from './task-create-without-definition.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutDefinitionInput } from './task-create-or-connect-without-definition.input';
import { TaskCreateManyDefinitionInputEnvelope } from './task-create-many-definition-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutDefinitionInput {

    @Field(() => [TaskCreateWithoutDefinitionInput], {nullable:true})
    @Type(() => TaskCreateWithoutDefinitionInput)
    create?: Array<TaskCreateWithoutDefinitionInput>;

    @Field(() => [TaskCreateOrConnectWithoutDefinitionInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutDefinitionInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutDefinitionInput>;

    @Field(() => TaskCreateManyDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyDefinitionInputEnvelope)
    createMany?: TaskCreateManyDefinitionInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
