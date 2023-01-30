import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsScalarWhereInput } from './project-settings-scalar-where.input';
import { Type } from 'class-transformer';
import { ProjectSettingsUpdateManyMutationInput } from './project-settings-update-many-mutation.input';

@InputType()
export class ProjectSettingsUpdateManyWithWhereWithoutProjectInput {

    @Field(() => ProjectSettingsScalarWhereInput, {nullable:false})
    @Type(() => ProjectSettingsScalarWhereInput)
    where!: ProjectSettingsScalarWhereInput;

    @Field(() => ProjectSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectSettingsUpdateManyMutationInput)
    data!: ProjectSettingsUpdateManyMutationInput;
}
