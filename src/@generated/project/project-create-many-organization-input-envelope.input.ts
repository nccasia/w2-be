import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyOrganizationInput } from './project-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyOrganizationInputEnvelope {

    @Field(() => [ProjectCreateManyOrganizationInput], {nullable:false})
    @Type(() => ProjectCreateManyOrganizationInput)
    data!: Array<ProjectCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
