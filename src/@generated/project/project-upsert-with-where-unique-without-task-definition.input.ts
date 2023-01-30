import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutTaskDefinitionInput } from './project-update-without-task-definition.input';
import { ProjectCreateWithoutTaskDefinitionInput } from './project-create-without-task-definition.input';

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutTaskDefinitionInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutTaskDefinitionInput)
    update!: ProjectUpdateWithoutTaskDefinitionInput;

    @Field(() => ProjectCreateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => ProjectCreateWithoutTaskDefinitionInput)
    create!: ProjectCreateWithoutTaskDefinitionInput;
}
