import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectSettingsUpdateWithoutProjectInput } from './project-settings-update-without-project.input';
import { ProjectSettingsCreateWithoutProjectInput } from './project-settings-create-without-project.input';

@InputType()
export class ProjectSettingsUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:false})
    @Type(() => ProjectSettingsWhereUniqueInput)
    where!: ProjectSettingsWhereUniqueInput;

    @Field(() => ProjectSettingsUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectSettingsUpdateWithoutProjectInput)
    update!: ProjectSettingsUpdateWithoutProjectInput;

    @Field(() => ProjectSettingsCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectSettingsCreateWithoutProjectInput)
    create!: ProjectSettingsCreateWithoutProjectInput;
}
