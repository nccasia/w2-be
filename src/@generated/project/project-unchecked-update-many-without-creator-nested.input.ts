import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutCreatorInput } from './project-create-without-creator.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutCreatorInput } from './project-create-or-connect-without-creator.input';
import { ProjectUpsertWithWhereUniqueWithoutCreatorInput } from './project-upsert-with-where-unique-without-creator.input';
import { ProjectCreateManyCreatorInputEnvelope } from './project-create-many-creator-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutCreatorInput } from './project-update-with-where-unique-without-creator.input';
import { ProjectUpdateManyWithWhereWithoutCreatorInput } from './project-update-many-with-where-without-creator.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutCreatorNestedInput {

    @Field(() => [ProjectCreateWithoutCreatorInput], {nullable:true})
    @Type(() => ProjectCreateWithoutCreatorInput)
    create?: Array<ProjectCreateWithoutCreatorInput>;

    @Field(() => [ProjectCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutCreatorInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutCreatorInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutCreatorInput>;

    @Field(() => ProjectCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyCreatorInputEnvelope)
    createMany?: ProjectCreateManyCreatorInputEnvelope;

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

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutCreatorInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutCreatorInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutCreatorInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutCreatorInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutCreatorInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
