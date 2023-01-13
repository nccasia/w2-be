import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionType } from '../prisma/action-type.enum';
import { EventLogCreateNestedManyWithoutActionInput } from '../event-log/event-log-create-nested-many-without-action.input';

@InputType()
export class ActionCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ActionType, {nullable:false})
    type!: keyof typeof ActionType;

    @Field(() => EventLogCreateNestedManyWithoutActionInput, {nullable:true})
    events?: EventLogCreateNestedManyWithoutActionInput;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    intent!: string;

    @Field(() => String, {nullable:false})
    domain!: string;

    @Field(() => String, {nullable:false})
    content!: string;
}
