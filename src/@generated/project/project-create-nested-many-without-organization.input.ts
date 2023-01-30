import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutOrganizationInput } from './project-create-without-organization.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutOrganizationInput } from './project-create-or-connect-without-organization.input';
import { ProjectCreateManyOrganizationInputEnvelope } from './project-create-many-organization-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutOrganizationInput {

    @Field(() => [ProjectCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => ProjectCreateWithoutOrganizationInput)
    create?: Array<ProjectCreateWithoutOrganizationInput>;

    @Field(() => [ProjectCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutOrganizationInput>;

    @Field(() => ProjectCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyOrganizationInputEnvelope)
    createMany?: ProjectCreateManyOrganizationInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}
