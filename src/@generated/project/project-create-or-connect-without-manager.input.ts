import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutManagerInput } from './project-create-without-manager.input';

@InputType()
export class ProjectCreateOrConnectWithoutManagerInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutManagerInput, {nullable:false})
    @Type(() => ProjectCreateWithoutManagerInput)
    create!: ProjectCreateWithoutManagerInput;
}
