import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTaskDefinitionInput } from './project-create-without-task-definition.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutTaskDefinitionInput } from './project-create-or-connect-without-task-definition.input';
import { ProjectCreateManyTaskDefinitionInputEnvelope } from './project-create-many-task-definition-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutTaskDefinitionInput {

    @Field(() => [ProjectCreateWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => ProjectCreateWithoutTaskDefinitionInput)
    create?: Array<ProjectCreateWithoutTaskDefinitionInput>;

    @Field(() => [ProjectCreateOrConnectWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTaskDefinitionInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutTaskDefinitionInput>;

    @Field(() => ProjectCreateManyTaskDefinitionInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyTaskDefinitionInputEnvelope)
    createMany?: ProjectCreateManyTaskDefinitionInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}
