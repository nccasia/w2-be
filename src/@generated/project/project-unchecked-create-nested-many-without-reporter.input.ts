import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutReporterInput } from './project-create-without-reporter.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutReporterInput } from './project-create-or-connect-without-reporter.input';
import { ProjectCreateManyReporterInputEnvelope } from './project-create-many-reporter-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectUncheckedCreateNestedManyWithoutReporterInput {

    @Field(() => [ProjectCreateWithoutReporterInput], {nullable:true})
    @Type(() => ProjectCreateWithoutReporterInput)
    create?: Array<ProjectCreateWithoutReporterInput>;

    @Field(() => [ProjectCreateOrConnectWithoutReporterInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutReporterInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutReporterInput>;

    @Field(() => ProjectCreateManyReporterInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyReporterInputEnvelope)
    createMany?: ProjectCreateManyReporterInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}
