import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutCreatorInput } from './project-create-without-creator.input';

@InputType()
export class ProjectCreateOrConnectWithoutCreatorInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutCreatorInput, {nullable:false})
    @Type(() => ProjectCreateWithoutCreatorInput)
    create!: ProjectCreateWithoutCreatorInput;
}
