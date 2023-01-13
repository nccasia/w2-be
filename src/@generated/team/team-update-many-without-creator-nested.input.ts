import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutCreatorInput } from './team-create-without-creator.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutCreatorInput } from './team-create-or-connect-without-creator.input';
import { TeamUpsertWithWhereUniqueWithoutCreatorInput } from './team-upsert-with-where-unique-without-creator.input';
import { TeamCreateManyCreatorInputEnvelope } from './team-create-many-creator-input-envelope.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { TeamUpdateWithWhereUniqueWithoutCreatorInput } from './team-update-with-where-unique-without-creator.input';
import { TeamUpdateManyWithWhereWithoutCreatorInput } from './team-update-many-with-where-without-creator.input';
import { TeamScalarWhereInput } from './team-scalar-where.input';

@InputType()
export class TeamUpdateManyWithoutCreatorNestedInput {

    @Field(() => [TeamCreateWithoutCreatorInput], {nullable:true})
    @Type(() => TeamCreateWithoutCreatorInput)
    create?: Array<TeamCreateWithoutCreatorInput>;

    @Field(() => [TeamCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<TeamCreateOrConnectWithoutCreatorInput>;

    @Field(() => [TeamUpsertWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => TeamUpsertWithWhereUniqueWithoutCreatorInput)
    upsert?: Array<TeamUpsertWithWhereUniqueWithoutCreatorInput>;

    @Field(() => TeamCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => TeamCreateManyCreatorInputEnvelope)
    createMany?: TeamCreateManyCreatorInputEnvelope;

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

    @Field(() => [TeamUpdateWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => TeamUpdateWithWhereUniqueWithoutCreatorInput)
    update?: Array<TeamUpdateWithWhereUniqueWithoutCreatorInput>;

    @Field(() => [TeamUpdateManyWithWhereWithoutCreatorInput], {nullable:true})
    @Type(() => TeamUpdateManyWithWhereWithoutCreatorInput)
    updateMany?: Array<TeamUpdateManyWithWhereWithoutCreatorInput>;

    @Field(() => [TeamScalarWhereInput], {nullable:true})
    @Type(() => TeamScalarWhereInput)
    deleteMany?: Array<TeamScalarWhereInput>;
}
