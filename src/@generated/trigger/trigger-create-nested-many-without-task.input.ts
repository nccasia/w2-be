import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerCreateWithoutTaskInput } from './trigger-create-without-task.input';
import { Type } from 'class-transformer';
import { TriggerCreateOrConnectWithoutTaskInput } from './trigger-create-or-connect-without-task.input';
import { TriggerCreateManyTaskInputEnvelope } from './trigger-create-many-task-input-envelope.input';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';

@InputType()
export class TriggerCreateNestedManyWithoutTaskInput {

    @Field(() => [TriggerCreateWithoutTaskInput], {nullable:true})
    @Type(() => TriggerCreateWithoutTaskInput)
    create?: Array<TriggerCreateWithoutTaskInput>;

    @Field(() => [TriggerCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => TriggerCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<TriggerCreateOrConnectWithoutTaskInput>;

    @Field(() => TriggerCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => TriggerCreateManyTaskInputEnvelope)
    createMany?: TriggerCreateManyTaskInputEnvelope;

    @Field(() => [TriggerWhereUniqueInput], {nullable:true})
    @Type(() => TriggerWhereUniqueInput)
    connect?: Array<TriggerWhereUniqueInput>;
}
