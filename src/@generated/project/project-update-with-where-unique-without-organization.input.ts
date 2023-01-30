import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutOrganizationInput } from './project-update-without-organization.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutOrganizationInput)
    data!: ProjectUpdateWithoutOrganizationInput;
}
