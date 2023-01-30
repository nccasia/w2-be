import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsCreateWithoutProjectInput } from './project-settings-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectSettingsCreateOrConnectWithoutProjectInput } from './project-settings-create-or-connect-without-project.input';
import { ProjectSettingsUpsertWithWhereUniqueWithoutProjectInput } from './project-settings-upsert-with-where-unique-without-project.input';
import { ProjectSettingsCreateManyProjectInputEnvelope } from './project-settings-create-many-project-input-envelope.input';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';
import { ProjectSettingsUpdateWithWhereUniqueWithoutProjectInput } from './project-settings-update-with-where-unique-without-project.input';
import { ProjectSettingsUpdateManyWithWhereWithoutProjectInput } from './project-settings-update-many-with-where-without-project.input';
import { ProjectSettingsScalarWhereInput } from './project-settings-scalar-where.input';

@InputType()
export class ProjectSettingsUpdateManyWithoutProjectNestedInput {

    @Field(() => [ProjectSettingsCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectSettingsCreateWithoutProjectInput)
    create?: Array<ProjectSettingsCreateWithoutProjectInput>;

    @Field(() => [ProjectSettingsCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectSettingsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectSettingsCreateOrConnectWithoutProjectInput>;

    @Field(() => [ProjectSettingsUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectSettingsUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ProjectSettingsUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ProjectSettingsCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectSettingsCreateManyProjectInputEnvelope)
    createMany?: ProjectSettingsCreateManyProjectInputEnvelope;

    @Field(() => [ProjectSettingsWhereUniqueInput], {nullable:true})
    @Type(() => ProjectSettingsWhereUniqueInput)
    set?: Array<ProjectSettingsWhereUniqueInput>;

    @Field(() => [ProjectSettingsWhereUniqueInput], {nullable:true})
    @Type(() => ProjectSettingsWhereUniqueInput)
    disconnect?: Array<ProjectSettingsWhereUniqueInput>;

    @Field(() => [ProjectSettingsWhereUniqueInput], {nullable:true})
    @Type(() => ProjectSettingsWhereUniqueInput)
    delete?: Array<ProjectSettingsWhereUniqueInput>;

    @Field(() => [ProjectSettingsWhereUniqueInput], {nullable:true})
    @Type(() => ProjectSettingsWhereUniqueInput)
    connect?: Array<ProjectSettingsWhereUniqueInput>;

    @Field(() => [ProjectSettingsUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectSettingsUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ProjectSettingsUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ProjectSettingsUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ProjectSettingsUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ProjectSettingsUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ProjectSettingsScalarWhereInput], {nullable:true})
    @Type(() => ProjectSettingsScalarWhereInput)
    deleteMany?: Array<ProjectSettingsScalarWhereInput>;
}
