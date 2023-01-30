import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutTaskDefinitionInput } from './project-update-without-task-definition.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutTaskDefinitionInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutTaskDefinitionInput)
    data!: ProjectUpdateWithoutTaskDefinitionInput;
}
