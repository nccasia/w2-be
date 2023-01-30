import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutReporterInput } from './project-create-without-reporter.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutReporterInput } from './project-create-or-connect-without-reporter.input';
import { ProjectUpsertWithWhereUniqueWithoutReporterInput } from './project-upsert-with-where-unique-without-reporter.input';
import { ProjectCreateManyReporterInputEnvelope } from './project-create-many-reporter-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutReporterInput } from './project-update-with-where-unique-without-reporter.input';
import { ProjectUpdateManyWithWhereWithoutReporterInput } from './project-update-many-with-where-without-reporter.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutReporterNestedInput {

    @Field(() => [ProjectCreateWithoutReporterInput], {nullable:true})
    @Type(() => ProjectCreateWithoutReporterInput)
    create?: Array<ProjectCreateWithoutReporterInput>;

    @Field(() => [ProjectCreateOrConnectWithoutReporterInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutReporterInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutReporterInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutReporterInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutReporterInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutReporterInput>;

    @Field(() => ProjectCreateManyReporterInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyReporterInputEnvelope)
    createMany?: ProjectCreateManyReporterInputEnvelope;

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

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutReporterInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutReporterInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutReporterInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutReporterInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutReporterInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutReporterInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
