import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutReporterInput } from './project-update-without-reporter.input';
import { ProjectCreateWithoutReporterInput } from './project-create-without-reporter.input';

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutReporterInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutReporterInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutReporterInput)
    update!: ProjectUpdateWithoutReporterInput;

    @Field(() => ProjectCreateWithoutReporterInput, {nullable:false})
    @Type(() => ProjectCreateWithoutReporterInput)
    create!: ProjectCreateWithoutReporterInput;
}
