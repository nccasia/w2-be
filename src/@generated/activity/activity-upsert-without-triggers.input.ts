import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityUpdateWithoutTriggersInput } from './activity-update-without-triggers.input';
import { Type } from 'class-transformer';
import { ActivityCreateWithoutTriggersInput } from './activity-create-without-triggers.input';

@InputType()
export class ActivityUpsertWithoutTriggersInput {

    @Field(() => ActivityUpdateWithoutTriggersInput, {nullable:false})
    @Type(() => ActivityUpdateWithoutTriggersInput)
    update!: ActivityUpdateWithoutTriggersInput;

    @Field(() => ActivityCreateWithoutTriggersInput, {nullable:false})
    @Type(() => ActivityCreateWithoutTriggersInput)
    create!: ActivityCreateWithoutTriggersInput;
}
