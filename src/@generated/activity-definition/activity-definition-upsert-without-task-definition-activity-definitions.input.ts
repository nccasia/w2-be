import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput } from './activity-definition-update-without-task-definition-activity-definitions.input';
import { Type } from 'class-transformer';
import { ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput } from './activity-definition-create-without-task-definition-activity-definitions.input';

@InputType()
export class ActivityDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput {

    @Field(() => ActivityDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:false})
    @Type(() => ActivityDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput)
    update!: ActivityDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:false})
    @Type(() => ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput)
    create!: ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput;
}
