import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerType } from '../prisma/trigger-type.enum';

@InputType()
export class TriggerCreateWithoutActivityInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TriggerType, {nullable:false})
    type!: keyof typeof TriggerType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;
}
