import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutManagerInput } from './team-create-without-manager.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutManagerInput } from './team-create-or-connect-without-manager.input';
import { TeamUpsertWithWhereUniqueWithoutManagerInput } from './team-upsert-with-where-unique-without-manager.input';
import { TeamCreateManyManagerInputEnvelope } from './team-create-many-manager-input-envelope.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { TeamUpdateWithWhereUniqueWithoutManagerInput } from './team-update-with-where-unique-without-manager.input';
import { TeamUpdateManyWithWhereWithoutManagerInput } from './team-update-many-with-where-without-manager.input';
import { TeamScalarWhereInput } from './team-scalar-where.input';

@InputType()
export class TeamUpdateManyWithoutManagerNestedInput {

    @Field(() => [TeamCreateWithoutManagerInput], {nullable:true})
    @Type(() => TeamCreateWithoutManagerInput)
    create?: Array<TeamCreateWithoutManagerInput>;

    @Field(() => [TeamCreateOrConnectWithoutManagerInput], {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutManagerInput)
    connectOrCreate?: Array<TeamCreateOrConnectWithoutManagerInput>;

    @Field(() => [TeamUpsertWithWhereUniqueWithoutManagerInput], {nullable:true})
    @Type(() => TeamUpsertWithWhereUniqueWithoutManagerInput)
    upsert?: Array<TeamUpsertWithWhereUniqueWithoutManagerInput>;

    @Field(() => TeamCreateManyManagerInputEnvelope, {nullable:true})
    @Type(() => TeamCreateManyManagerInputEnvelope)
    createMany?: TeamCreateManyManagerInputEnvelope;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    set?: Array<TeamWhereUniqueInput>;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    disconnect?: Array<TeamWhereUniqueInput>;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    delete?: Array<TeamWhereUniqueInput>;

    @Field(() => [TeamWhereUniqueInput], {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: Array<TeamWhereUniqueInput>;

    @Field(() => [TeamUpdateWithWhereUniqueWithoutManagerInput], {nullable:true})
    @Type(() => TeamUpdateWithWhereUniqueWithoutManagerInput)
    update?: Array<TeamUpdateWithWhereUniqueWithoutManagerInput>;

    @Field(() => [TeamUpdateManyWithWhereWithoutManagerInput], {nullable:true})
    @Type(() => TeamUpdateManyWithWhereWithoutManagerInput)
    updateMany?: Array<TeamUpdateManyWithWhereWithoutManagerInput>;

    @Field(() => [TeamScalarWhereInput], {nullable:true})
    @Type(() => TeamScalarWhereInput)
    deleteMany?: Array<TeamScalarWhereInput>;
}
