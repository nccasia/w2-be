import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTaskDefinitionInput } from './project-create-without-task-definition.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutTaskDefinitionInput } from './project-create-or-connect-without-task-definition.input';
import { ProjectUpsertWithWhereUniqueWithoutTaskDefinitionInput } from './project-upsert-with-where-unique-without-task-definition.input';
import { ProjectCreateManyTaskDefinitionInputEnvelope } from './project-create-many-task-definition-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutTaskDefinitionInput } from './project-update-with-where-unique-without-task-definition.input';
import { ProjectUpdateManyWithWhereWithoutTaskDefinitionInput } from './project-update-many-with-where-without-task-definition.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutTaskDefinitionNestedInput {

    @Field(() => [ProjectCreateWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => ProjectCreateWithoutTaskDefinitionInput)
    create?: Array<ProjectCreateWithoutTaskDefinitionInput>;

    @Field(() => [ProjectCreateOrConnectWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTaskDefinitionInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutTaskDefinitionInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutTaskDefinitionInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutTaskDefinitionInput>;

    @Field(() => ProjectCreateManyTaskDefinitionInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyTaskDefinitionInputEnvelope)
    createMany?: ProjectCreateManyTaskDefinitionInputEnvelope;

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

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutTaskDefinitionInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutTaskDefinitionInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutTaskDefinitionInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutTaskDefinitionInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
