import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActionType } from '../prisma/action-type.enum';
import { EventLogUncheckedCreateNestedManyWithoutActionInput } from '../event-log/event-log-unchecked-create-nested-many-without-action.input';

@InputType()
export class ActionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ActionType, {nullable:false})
    type!: keyof typeof ActionType;

    @Field(() => EventLogUncheckedCreateNestedManyWithoutActionInput, {nullable:true})
    events?: EventLogUncheckedCreateNestedManyWithoutActionInput;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    intent!: string;

    @Field(() => String, {nullable:false})
    domain!: string;

    @Field(() => String, {nullable:false})
    content!: string;
}
