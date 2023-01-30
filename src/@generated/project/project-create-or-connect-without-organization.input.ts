import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutOrganizationInput } from './project-create-without-organization.input';

@InputType()
export class ProjectCreateOrConnectWithoutOrganizationInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => ProjectCreateWithoutOrganizationInput)
    create!: ProjectCreateWithoutOrganizationInput;
}
