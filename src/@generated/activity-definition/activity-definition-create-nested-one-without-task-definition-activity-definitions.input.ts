import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput } from './activity-definition-create-without-task-definition-activity-definitions.input';
import { Type } from 'class-transformer';
import { ActivityDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput } from './activity-definition-create-or-connect-without-task-definition-activity-definitions.input';
import { ActivityDefinitionWhereUniqueInput } from './activity-definition-where-unique.input';

@InputType()
export class ActivityDefinitionCreateNestedOneWithoutTaskDefinitionActivityDefinitionsInput {

    @Field(() => ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput)
    create?: ActivityDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => ActivityDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput, {nullable:true})
    @Type(() => ActivityDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput)
    connectOrCreate?: ActivityDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => ActivityDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => ActivityDefinitionWhereUniqueInput)
    connect?: ActivityDefinitionWhereUniqueInput;
}
