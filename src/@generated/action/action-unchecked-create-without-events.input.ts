import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActionType } from '../prisma/action-type.enum';

@InputType()
export class ActionUncheckedCreateWithoutEventsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ActionType, {nullable:false})
    type!: keyof typeof ActionType;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    intent!: string;

    @Field(() => String, {nullable:false})
    domain!: string;

    @Field(() => String, {nullable:false})
    content!: string;
}
