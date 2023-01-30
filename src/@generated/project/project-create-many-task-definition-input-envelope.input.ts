import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyTaskDefinitionInput } from './project-create-many-task-definition.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyTaskDefinitionInputEnvelope {

    @Field(() => [ProjectCreateManyTaskDefinitionInput], {nullable:false})
    @Type(() => ProjectCreateManyTaskDefinitionInput)
    data!: Array<ProjectCreateManyTaskDefinitionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
