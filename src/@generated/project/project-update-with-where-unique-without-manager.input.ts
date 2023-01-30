import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutManagerInput } from './project-update-without-manager.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutManagerInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutManagerInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutManagerInput)
    data!: ProjectUpdateWithoutManagerInput;
}
