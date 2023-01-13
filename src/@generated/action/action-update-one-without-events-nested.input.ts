import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionCreateWithoutEventsInput } from './action-create-without-events.input';
import { Type } from 'class-transformer';
import { ActionCreateOrConnectWithoutEventsInput } from './action-create-or-connect-without-events.input';
import { ActionUpsertWithoutEventsInput } from './action-upsert-without-events.input';
import { ActionWhereUniqueInput } from './action-where-unique.input';
import { ActionUpdateWithoutEventsInput } from './action-update-without-events.input';

@InputType()
export class ActionUpdateOneWithoutEventsNestedInput {

    @Field(() => ActionCreateWithoutEventsInput, {nullable:true})
    @Type(() => ActionCreateWithoutEventsInput)
    create?: ActionCreateWithoutEventsInput;

    @Field(() => ActionCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => ActionCreateOrConnectWithoutEventsInput)
    connectOrCreate?: ActionCreateOrConnectWithoutEventsInput;

    @Field(() => ActionUpsertWithoutEventsInput, {nullable:true})
    @Type(() => ActionUpsertWithoutEventsInput)
    upsert?: ActionUpsertWithoutEventsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ActionWhereUniqueInput, {nullable:true})
    @Type(() => ActionWhereUniqueInput)
    connect?: ActionWhereUniqueInput;

    @Field(() => ActionUpdateWithoutEventsInput, {nullable:true})
    @Type(() => ActionUpdateWithoutEventsInput)
    update?: ActionUpdateWithoutEventsInput;
}
