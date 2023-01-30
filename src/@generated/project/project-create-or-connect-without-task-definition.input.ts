import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutTaskDefinitionInput } from './project-create-without-task-definition.input';

@InputType()
export class ProjectCreateOrConnectWithoutTaskDefinitionInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => ProjectCreateWithoutTaskDefinitionInput)
    create!: ProjectCreateWithoutTaskDefinitionInput;
}
