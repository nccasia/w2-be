import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { Type } from 'class-transformer';
import { TriggerUpdateWithoutActivityInput } from './trigger-update-without-activity.input';

@InputType()
export class TriggerUpdateWithWhereUniqueWithoutActivityInput {

    @Field(() => TriggerWhereUniqueInput, {nullable:false})
    @Type(() => TriggerWhereUniqueInput)
    where!: TriggerWhereUniqueInput;

    @Field(() => TriggerUpdateWithoutActivityInput, {nullable:false})
    @Type(() => TriggerUpdateWithoutActivityInput)
    data!: TriggerUpdateWithoutActivityInput;
}
