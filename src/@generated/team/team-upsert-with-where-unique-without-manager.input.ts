import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamUpdateWithoutManagerInput } from './team-update-without-manager.input';
import { TeamCreateWithoutManagerInput } from './team-create-without-manager.input';

@InputType()
export class TeamUpsertWithWhereUniqueWithoutManagerInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamUpdateWithoutManagerInput, {nullable:false})
    @Type(() => TeamUpdateWithoutManagerInput)
    update!: TeamUpdateWithoutManagerInput;

    @Field(() => TeamCreateWithoutManagerInput, {nullable:false})
    @Type(() => TeamCreateWithoutManagerInput)
    create!: TeamCreateWithoutManagerInput;
}
