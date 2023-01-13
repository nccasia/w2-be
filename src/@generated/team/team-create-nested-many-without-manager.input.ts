import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutManagerInput } from './team-create-without-manager.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutManagerInput } from './team-create-or-connect-without-manager.input';
import { TeamCreateManyManagerInputEnvelope } from './team-create-many-manager-input-envelope.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';

@InputType()
export class TeamCreateNestedManyWithoutManagerInput {

    @Field(() => [TeamCreateWithoutManagerInput], {nullable:true})
    @Type(() => TeamCreateWithoutManagerInput)
    create?: Array<TeamCreateWithoutManagerInput>;

    @Field(() => [TeamCreateOrConnectWithoutManagerInput], {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutManagerInput)
    connectOrCreate?: Array<TeamCreateOrConnectWithoutManagerInput>;

    @Field(() => TeamCreateManyManagerInputEnvelope, {nullable:true})
    @Type(() => TeamCreateManyManagerInputEnvelope)
    createMany?: TeamCreateManyManagerInputEnvelope;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: Array<TeamWhereUniqueInput>;
}
