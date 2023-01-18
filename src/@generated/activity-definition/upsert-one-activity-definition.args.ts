import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDefinitionWhereUniqueInput } from './activity-definition-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityDefinitionCreateInput } from './activity-definition-create.input';
import { ActivityDefinitionUpdateInput } from './activity-definition-update.input';

@ArgsType()
export class UpsertOneActivityDefinitionArgs {

    @Field(() => ActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => ActivityDefinitionWhereUniqueInput)
    where!: ActivityDefinitionWhereUniqueInput;

    @Field(() => ActivityDefinitionCreateInput, {nullable:false})
    @Type(() => ActivityDefinitionCreateInput)
    create!: ActivityDefinitionCreateInput;

    @Field(() => ActivityDefinitionUpdateInput, {nullable:false})
    @Type(() => ActivityDefinitionUpdateInput)
    update!: ActivityDefinitionUpdateInput;
}
