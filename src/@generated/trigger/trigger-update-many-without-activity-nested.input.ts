import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerCreateWithoutActivityInput } from './trigger-create-without-activity.input';
import { Type } from 'class-transformer';
import { TriggerCreateOrConnectWithoutActivityInput } from './trigger-create-or-connect-without-activity.input';
import { TriggerUpsertWithWhereUniqueWithoutActivityInput } from './trigger-upsert-with-where-unique-without-activity.input';
import { TriggerCreateManyActivityInputEnvelope } from './trigger-create-many-activity-input-envelope.input';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { TriggerUpdateWithWhereUniqueWithoutActivityInput } from './trigger-update-with-where-unique-without-activity.input';
import { TriggerUpdateManyWithWhereWithoutActivityInput } from './trigger-update-many-with-where-without-activity.input';
import { TriggerScalarWhereInput } from './trigger-scalar-where.input';

@InputType()
export class TriggerUpdateManyWithoutActivityNestedInput {

    @Field(() => [TriggerCreateWithoutActivityInput], {nullable:true})
    @Type(() => TriggerCreateWithoutActivityInput)
    create?: Array<TriggerCreateWithoutActivityInput>;

    @Field(() => [TriggerCreateOrConnectWithoutActivityInput], {nullable:true})
    @Type(() => TriggerCreateOrConnectWithoutActivityInput)
    connectOrCreate?: Array<TriggerCreateOrConnectWithoutActivityInput>;

    @Field(() => [TriggerUpsertWithWhereUniqueWithoutActivityInput], {nullable:true})
    @Type(() => TriggerUpsertWithWhereUniqueWithoutActivityInput)
    upsert?: Array<TriggerUpsertWithWhereUniqueWithoutActivityInput>;

    @Field(() => TriggerCreateManyActivityInputEnvelope, {nullable:true})
    @Type(() => TriggerCreateManyActivityInputEnvelope)
    createMany?: TriggerCreateManyActivityInputEnvelope;

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

    @Field(() => [TriggerUpdateWithWhereUniqueWithoutActivityInput], {nullable:true})
    @Type(() => TriggerUpdateWithWhereUniqueWithoutActivityInput)
    update?: Array<TriggerUpdateWithWhereUniqueWithoutActivityInput>;

    @Field(() => [TriggerUpdateManyWithWhereWithoutActivityInput], {nullable:true})
    @Type(() => TriggerUpdateManyWithWhereWithoutActivityInput)
    updateMany?: Array<TriggerUpdateManyWithWhereWithoutActivityInput>;

    @Field(() => [TriggerScalarWhereInput], {nullable:true})
    @Type(() => TriggerScalarWhereInput)
    deleteMany?: Array<TriggerScalarWhereInput>;
}
