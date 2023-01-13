import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityWhereInput } from './activity-where.input';

@InputType()
export class ActivityRelationFilter {

    @Field(() => ActivityWhereInput, {nullable:true})
    is?: ActivityWhereInput;

    @Field(() => ActivityWhereInput, {nullable:true})
    isNot?: ActivityWhereInput;
}
