import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDefinitionWhereUniqueInput } from './activity-definition-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueActivityDefinitionArgs {

    @Field(() => ActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => ActivityDefinitionWhereUniqueInput)
    where!: ActivityDefinitionWhereUniqueInput;
}
