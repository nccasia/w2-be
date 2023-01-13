import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { Type } from 'class-transformer';
import { TriggerUpdateWithoutActivityInput } from './trigger-update-without-activity.input';
import { TriggerCreateWithoutActivityInput } from './trigger-create-without-activity.input';

@InputType()
export class TriggerUpsertWithWhereUniqueWithoutActivityInput {

    @Field(() => TriggerWhereUniqueInput, {nullable:false})
    @Type(() => TriggerWhereUniqueInput)
    where!: TriggerWhereUniqueInput;

    @Field(() => TriggerUpdateWithoutActivityInput, {nullable:false})
    @Type(() => TriggerUpdateWithoutActivityInput)
    update!: TriggerUpdateWithoutActivityInput;

    @Field(() => TriggerCreateWithoutActivityInput, {nullable:false})
    @Type(() => TriggerCreateWithoutActivityInput)
    create!: TriggerCreateWithoutActivityInput;
}
