import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyReporterInput } from './project-create-many-reporter.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyReporterInputEnvelope {

    @Field(() => [ProjectCreateManyReporterInput], {nullable:false})
    @Type(() => ProjectCreateManyReporterInput)
    data!: Array<ProjectCreateManyReporterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
