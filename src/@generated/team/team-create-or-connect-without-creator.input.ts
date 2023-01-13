import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutCreatorInput } from './team-create-without-creator.input';

@InputType()
export class TeamCreateOrConnectWithoutCreatorInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamCreateWithoutCreatorInput, {nullable:false})
    @Type(() => TeamCreateWithoutCreatorInput)
    create!: TeamCreateWithoutCreatorInput;
}
