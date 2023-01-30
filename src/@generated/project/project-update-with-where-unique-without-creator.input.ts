import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutCreatorInput } from './project-update-without-creator.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutCreatorInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutCreatorInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutCreatorInput)
    data!: ProjectUpdateWithoutCreatorInput;
}
