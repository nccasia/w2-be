import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutOrganizationInput } from './project-update-without-organization.input';
import { ProjectCreateWithoutOrganizationInput } from './project-create-without-organization.input';

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutOrganizationInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutOrganizationInput)
    update!: ProjectUpdateWithoutOrganizationInput;

    @Field(() => ProjectCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => ProjectCreateWithoutOrganizationInput)
    create!: ProjectCreateWithoutOrganizationInput;
}
