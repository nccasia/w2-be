import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamUpdateWithoutCreatorInput } from './team-update-without-creator.input';
import { TeamCreateWithoutCreatorInput } from './team-create-without-creator.input';

@InputType()
export class TeamUpsertWithWhereUniqueWithoutCreatorInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamUpdateWithoutCreatorInput, {nullable:false})
    @Type(() => TeamUpdateWithoutCreatorInput)
    update!: TeamUpdateWithoutCreatorInput;

    @Field(() => TeamCreateWithoutCreatorInput, {nullable:false})
    @Type(() => TeamCreateWithoutCreatorInput)
    create!: TeamCreateWithoutCreatorInput;
}
