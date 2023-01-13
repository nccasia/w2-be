import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutManagerInput } from './team-create-without-manager.input';

@InputType()
export class TeamCreateOrConnectWithoutManagerInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamCreateWithoutManagerInput, {nullable:false})
    @Type(() => TeamCreateWithoutManagerInput)
    create!: TeamCreateWithoutManagerInput;
}
