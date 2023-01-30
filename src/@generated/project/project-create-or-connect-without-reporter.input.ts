import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutReporterInput } from './project-create-without-reporter.input';

@InputType()
export class ProjectCreateOrConnectWithoutReporterInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutReporterInput, {nullable:false})
    @Type(() => ProjectCreateWithoutReporterInput)
    create!: ProjectCreateWithoutReporterInput;
}
