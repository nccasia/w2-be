import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutCreatorInput } from './project-create-without-creator.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutCreatorInput } from './project-create-or-connect-without-creator.input';
import { ProjectCreateManyCreatorInputEnvelope } from './project-create-many-creator-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutCreatorInput {

    @Field(() => [ProjectCreateWithoutCreatorInput], {nullable:true})
    @Type(() => ProjectCreateWithoutCreatorInput)
    create?: Array<ProjectCreateWithoutCreatorInput>;

    @Field(() => [ProjectCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutCreatorInput>;

    @Field(() => ProjectCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyCreatorInputEnvelope)
    createMany?: ProjectCreateManyCreatorInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}
