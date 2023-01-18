import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDefinitionWhereInput } from './activity-definition-where.input';

@InputType()
export class ActivityDefinitionRelationFilter {

    @Field(() => ActivityDefinitionWhereInput, {nullable:true})
    is?: ActivityDefinitionWhereInput;

    @Field(() => ActivityDefinitionWhereInput, {nullable:true})
    isNot?: ActivityDefinitionWhereInput;
}
