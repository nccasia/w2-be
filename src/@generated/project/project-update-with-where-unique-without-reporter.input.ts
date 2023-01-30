import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutReporterInput } from './project-update-without-reporter.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutReporterInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutReporterInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutReporterInput)
    data!: ProjectUpdateWithoutReporterInput;
}
