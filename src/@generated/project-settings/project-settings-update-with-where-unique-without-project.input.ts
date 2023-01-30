import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectSettingsUpdateWithoutProjectInput } from './project-settings-update-without-project.input';

@InputType()
export class ProjectSettingsUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:false})
    @Type(() => ProjectSettingsWhereUniqueInput)
    where!: ProjectSettingsWhereUniqueInput;

    @Field(() => ProjectSettingsUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectSettingsUpdateWithoutProjectInput)
    data!: ProjectSettingsUpdateWithoutProjectInput;
}
