import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutManagerInput } from './project-create-without-manager.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutManagerInput } from './project-create-or-connect-without-manager.input';
import { ProjectCreateManyManagerInputEnvelope } from './project-create-many-manager-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectUncheckedCreateNestedManyWithoutManagerInput {

    @Field(() => [ProjectCreateWithoutManagerInput], {nullable:true})
    @Type(() => ProjectCreateWithoutManagerInput)
    create?: Array<ProjectCreateWithoutManagerInput>;

    @Field(() => [ProjectCreateOrConnectWithoutManagerInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutManagerInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutManagerInput>;

    @Field(() => ProjectCreateManyManagerInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyManagerInputEnvelope)
    createMany?: ProjectCreateManyManagerInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}
