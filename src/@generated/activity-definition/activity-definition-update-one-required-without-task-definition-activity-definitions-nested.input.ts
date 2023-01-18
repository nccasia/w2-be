import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput } from './activity-definition-create-without-task-definition-activity-definitions.input';
import { Type } from 'class-transformer';
import { ActivityDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput } from './activity-definition-create-or-connect-without-task-definition-activity-definitions.input';
import { ActivityDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput } from './activity-definition-upsert-without-task-definition-activity-definitions.input';
import { ActivityDefinitionWhereUniqueInput } from './activity-definition-where-unique.input';
import { ActivityDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput } from './activity-definition-update-without-task-definition-activity-definitions.input';

@InputType()
export class ActivityDefinitionUpdateOneRequiredWithoutTaskDefinitionActivityDefinitionsNestedInput {

    @Field(() => ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput)
    create?: ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => ActivityDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => ActivityDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput)
    connectOrCreate?: ActivityDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => ActivityDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => ActivityDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput)
    upsert?: ActivityDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => ActivityDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => ActivityDefinitionWhereUniqueInput)
    connect?: ActivityDefinitionWhereUniqueInput;

    @Field(() => ActivityDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => ActivityDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput)
    update?: ActivityDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput;
}
