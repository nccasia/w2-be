import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDefinitionWhereInput } from './activity-definition-where.input';
import { Type } from 'class-transformer';
import { ActivityDefinitionOrderByWithRelationInput } from './activity-definition-order-by-with-relation.input';
import { ActivityDefinitionWhereUniqueInput } from './activity-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActivityDefinitionScalarFieldEnum } from './activity-definition-scalar-field.enum';

@ArgsType()
export class FindFirstActivityDefinitionArgs {

    @Field(() => ActivityDefinitionWhereInput, {nullable:true})
    @Type(() => ActivityDefinitionWhereInput)
    where?: ActivityDefinitionWhereInput;

    @Field(() => [ActivityDefinitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActivityDefinitionOrderByWithRelationInput>;

    @Field(() => ActivityDefinitionWhereUniqueInput, {nullable:true})
    cursor?: ActivityDefinitionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActivityDefinitionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ActivityDefinitionScalarFieldEnum>;
}
