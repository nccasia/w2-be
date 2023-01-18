import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDefinitionUpdateInput } from './activity-definition-update.input';
import { Type } from 'class-transformer';
import { ActivityDefinitionWhereUniqueInput } from './activity-definition-where-unique.input';

@ArgsType()
export class UpdateOneActivityDefinitionArgs {

    @Field(() => ActivityDefinitionUpdateInput, {nullable:false})
    @Type(() => ActivityDefinitionUpdateInput)
    data!: ActivityDefinitionUpdateInput;

    @Field(() => ActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => ActivityDefinitionWhereUniqueInput)
    where!: ActivityDefinitionWhereUniqueInput;
}
