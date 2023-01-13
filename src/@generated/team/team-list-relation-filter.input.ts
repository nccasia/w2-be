import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereInput } from './team-where.input';

@InputType()
export class TeamListRelationFilter {

    @Field(() => TeamWhereInput, {nullable:true})
    every?: TeamWhereInput;

    @Field(() => TeamWhereInput, {nullable:true})
    some?: TeamWhereInput;

    @Field(() => TeamWhereInput, {nullable:true})
    none?: TeamWhereInput;
}
