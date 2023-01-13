import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionCreateWithoutEventsInput } from './action-create-without-events.input';
import { Type } from 'class-transformer';
import { ActionCreateOrConnectWithoutEventsInput } from './action-create-or-connect-without-events.input';
import { ActionWhereUniqueInput } from './action-where-unique.input';

@InputType()
export class ActionCreateNestedOneWithoutEventsInput {

    @Field(() => ActionCreateWithoutEventsInput, {nullable:true})
    @Type(() => ActionCreateWithoutEventsInput)
    create?: ActionCreateWithoutEventsInput;

    @Field(() => ActionCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => ActionCreateOrConnectWithoutEventsInput)
    connectOrCreate?: ActionCreateOrConnectWithoutEventsInput;

    @Field(() => ActionWhereUniqueInput, {nullable:true})
    @Type(() => ActionWhereUniqueInput)
    connect?: ActionWhereUniqueInput;
}
