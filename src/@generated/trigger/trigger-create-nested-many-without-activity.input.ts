import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerCreateWithoutActivityInput } from './trigger-create-without-activity.input';
import { Type } from 'class-transformer';
import { TriggerCreateOrConnectWithoutActivityInput } from './trigger-create-or-connect-without-activity.input';
import { TriggerCreateManyActivityInputEnvelope } from './trigger-create-many-activity-input-envelope.input';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';

@InputType()
export class TriggerCreateNestedManyWithoutActivityInput {

    @Field(() => [TriggerCreateWithoutActivityInput], {nullable:true})
    @Type(() => TriggerCreateWithoutActivityInput)
    create?: Array<TriggerCreateWithoutActivityInput>;

    @Field(() => [TriggerCreateOrConnectWithoutActivityInput], {nullable:true})
    @Type(() => TriggerCreateOrConnectWithoutActivityInput)
    connectOrCreate?: Array<TriggerCreateOrConnectWithoutActivityInput>;

    @Field(() => TriggerCreateManyActivityInputEnvelope, {nullable:true})
    @Type(() => TriggerCreateManyActivityInputEnvelope)
    createMany?: TriggerCreateManyActivityInputEnvelope;

    @Field(() => [TriggerWhereUniqueInput], {nullable:true})
    @Type(() => TriggerWhereUniqueInput)
    connect?: Array<TriggerWhereUniqueInput>;
}
