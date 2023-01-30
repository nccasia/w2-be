import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutOrganizationInput } from './project-create-without-organization.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutOrganizationInput } from './project-create-or-connect-without-organization.input';
import { ProjectUpsertWithWhereUniqueWithoutOrganizationInput } from './project-upsert-with-where-unique-without-organization.input';
import { ProjectCreateManyOrganizationInputEnvelope } from './project-create-many-organization-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutOrganizationInput } from './project-update-with-where-unique-without-organization.input';
import { ProjectUpdateManyWithWhereWithoutOrganizationInput } from './project-update-many-with-where-without-organization.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [ProjectCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => ProjectCreateWithoutOrganizationInput)
    create?: Array<ProjectCreateWithoutOrganizationInput>;

    @Field(() => [ProjectCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => ProjectCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyOrganizationInputEnvelope)
    createMany?: ProjectCreateManyOrganizationInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
