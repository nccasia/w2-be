import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDefinitionWhereUniqueInput } from './activity-definition-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput } from './activity-definition-create-without-task-definition-activity-definitions.input';

@InputType()
export class ActivityDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput {

    @Field(() => ActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => ActivityDefinitionWhereUniqueInput)
    where!: ActivityDefinitionWhereUniqueInput;

    @Field(() => ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:false})
    @Type(() => ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput)
    create!: ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput;
}
