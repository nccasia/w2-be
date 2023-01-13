import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutCreatorInput } from './team-create-without-creator.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutCreatorInput } from './team-create-or-connect-without-creator.input';
import { TeamCreateManyCreatorInputEnvelope } from './team-create-many-creator-input-envelope.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';

@InputType()
export class TeamCreateNestedManyWithoutCreatorInput {

    @Field(() => [TeamCreateWithoutCreatorInput], {nullable:true})
    @Type(() => TeamCreateWithoutCreatorInput)
    create?: Array<TeamCreateWithoutCreatorInput>;

    @Field(() => [TeamCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<TeamCreateOrConnectWithoutCreatorInput>;

    @Field(() => TeamCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => TeamCreateManyCreatorInputEnvelope)
    createMany?: TeamCreateManyCreatorInputEnvelope;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: Array<TeamWhereUniqueInput>;
}
