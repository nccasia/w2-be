import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereInput } from './team-where.input';

@InputType()
export class TeamRelationFilter {

    @Field(() => TeamWhereInput, {nullable:true})
    is?: TeamWhereInput;

    @Field(() => TeamWhereInput, {nullable:true})
    isNot?: TeamWhereInput;
}
