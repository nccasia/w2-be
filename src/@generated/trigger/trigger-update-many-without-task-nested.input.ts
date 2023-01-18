import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerCreateWithoutTaskInput } from './trigger-create-without-task.input';
import { Type } from 'class-transformer';
import { TriggerCreateOrConnectWithoutTaskInput } from './trigger-create-or-connect-without-task.input';
import { TriggerUpsertWithWhereUniqueWithoutTaskInput } from './trigger-upsert-with-where-unique-without-task.input';
import { TriggerCreateManyTaskInputEnvelope } from './trigger-create-many-task-input-envelope.input';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { TriggerUpdateWithWhereUniqueWithoutTaskInput } from './trigger-update-with-where-unique-without-task.input';
import { TriggerUpdateManyWithWhereWithoutTaskInput } from './trigger-update-many-with-where-without-task.input';
import { TriggerScalarWhereInput } from './trigger-scalar-where.input';

@InputType()
export class TriggerUpdateManyWithoutTaskNestedInput {

    @Field(() => [TriggerCreateWithoutTaskInput], {nullable:true})
    @Type(() => TriggerCreateWithoutTaskInput)
    create?: Array<TriggerCreateWithoutTaskInput>;

    @Field(() => [TriggerCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => TriggerCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<TriggerCreateOrConnectWithoutTaskInput>;

    @Field(() => [TriggerUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => TriggerUpsertWithWhereUniqueWithoutTaskInput)
    upsert?: Array<TriggerUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => TriggerCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => TriggerCreateManyTaskInputEnvelope)
    createMany?: TriggerCreateManyTaskInputEnvelope;

    @Field(() => [TriggerWhereUniqueInput], {nullable:true})
    @Type(() => TriggerWhereUniqueInput)
    set?: Array<TriggerWhereUniqueInput>;

    @Field(() => [TriggerWhereUniqueInput], {nullable:true})
    @Type(() => TriggerWhereUniqueInput)
    disconnect?: Array<TriggerWhereUniqueInput>;

    @Field(() => [TriggerWhereUniqueInput], {nullable:true})
    @Type(() => TriggerWhereUniqueInput)
    delete?: Array<TriggerWhereUniqueInput>;

    @Field(() => [TriggerWhereUniqueInput], {nullable:true})
    @Type(() => TriggerWhereUniqueInput)
    connect?: Array<TriggerWhereUniqueInput>;

    @Field(() => [TriggerUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => TriggerUpdateWithWhereUniqueWithoutTaskInput)
    update?: Array<TriggerUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [TriggerUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    @Type(() => TriggerUpdateManyWithWhereWithoutTaskInput)
    updateMany?: Array<TriggerUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [TriggerScalarWhereInput], {nullable:true})
    @Type(() => TriggerScalarWhereInput)
    deleteMany?: Array<TriggerScalarWhereInput>;
}
