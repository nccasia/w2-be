import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityUpdateWithoutTaskDefinitionsInput } from './activity-update-without-task-definitions.input';
import { Type } from 'class-transformer';
import { ActivityCreateWithoutTaskDefinitionsInput } from './activity-create-without-task-definitions.input';

@InputType()
export class ActivityUpsertWithoutTaskDefinitionsInput {

    @Field(() => ActivityUpdateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => ActivityUpdateWithoutTaskDefinitionsInput)
    update!: ActivityUpdateWithoutTaskDefinitionsInput;

    @Field(() => ActivityCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => ActivityCreateWithoutTaskDefinitionsInput)
    create!: ActivityCreateWithoutTaskDefinitionsInput;
}
