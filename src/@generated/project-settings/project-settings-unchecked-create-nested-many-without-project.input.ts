import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsCreateWithoutProjectInput } from './project-settings-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectSettingsCreateOrConnectWithoutProjectInput } from './project-settings-create-or-connect-without-project.input';
import { ProjectSettingsCreateManyProjectInputEnvelope } from './project-settings-create-many-project-input-envelope.input';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';

@InputType()
export class ProjectSettingsUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [ProjectSettingsCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectSettingsCreateWithoutProjectInput)
    create?: Array<ProjectSettingsCreateWithoutProjectInput>;

    @Field(() => [ProjectSettingsCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectSettingsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectSettingsCreateOrConnectWithoutProjectInput>;

    @Field(() => ProjectSettingsCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectSettingsCreateManyProjectInputEnvelope)
    createMany?: ProjectSettingsCreateManyProjectInputEnvelope;

    @Field(() => [ProjectSettingsWhereUniqueInput], {nullable:true})
    @Type(() => ProjectSettingsWhereUniqueInput)
    connect?: Array<ProjectSettingsWhereUniqueInput>;
}
