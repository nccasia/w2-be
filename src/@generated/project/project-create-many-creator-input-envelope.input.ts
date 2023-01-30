import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyCreatorInput } from './project-create-many-creator.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyCreatorInputEnvelope {

    @Field(() => [ProjectCreateManyCreatorInput], {nullable:false})
    @Type(() => ProjectCreateManyCreatorInput)
    data!: Array<ProjectCreateManyCreatorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
