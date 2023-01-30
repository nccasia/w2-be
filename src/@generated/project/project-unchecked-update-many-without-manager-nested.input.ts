import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutManagerInput } from './project-create-without-manager.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutManagerInput } from './project-create-or-connect-without-manager.input';
import { ProjectUpsertWithWhereUniqueWithoutManagerInput } from './project-upsert-with-where-unique-without-manager.input';
import { ProjectCreateManyManagerInputEnvelope } from './project-create-many-manager-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutManagerInput } from './project-update-with-where-unique-without-manager.input';
import { ProjectUpdateManyWithWhereWithoutManagerInput } from './project-update-many-with-where-without-manager.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutManagerNestedInput {

    @Field(() => [ProjectCreateWithoutManagerInput], {nullable:true})
    @Type(() => ProjectCreateWithoutManagerInput)
    create?: Array<ProjectCreateWithoutManagerInput>;

    @Field(() => [ProjectCreateOrConnectWithoutManagerInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutManagerInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutManagerInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutManagerInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutManagerInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutManagerInput>;

    @Field(() => ProjectCreateManyManagerInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyManagerInputEnvelope)
    createMany?: ProjectCreateManyManagerInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutManagerInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutManagerInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutManagerInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutManagerInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutManagerInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutManagerInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
