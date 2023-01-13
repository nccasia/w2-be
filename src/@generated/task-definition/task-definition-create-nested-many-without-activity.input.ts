import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutActivityInput } from './task-definition-create-without-activity.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutActivityInput } from './task-definition-create-or-connect-without-activity.input';
import { TaskDefinitionCreateManyActivityInputEnvelope } from './task-definition-create-many-activity-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionCreateNestedManyWithoutActivityInput {

    @Field(() => [TaskDefinitionCreateWithoutActivityInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutActivityInput)
    create?: Array<TaskDefinitionCreateWithoutActivityInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutActivityInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutActivityInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutActivityInput>;

    @Field(() => TaskDefinitionCreateManyActivityInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyActivityInputEnvelope)
    createMany?: TaskDefinitionCreateManyActivityInputEnvelope;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionWhereUniqueInput>;
}
