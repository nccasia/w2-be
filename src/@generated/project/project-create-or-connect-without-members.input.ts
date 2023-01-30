import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutMembersInput } from './project-create-without-members.input';

@InputType()
export class ProjectCreateOrConnectWithoutMembersInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutMembersInput, {nullable:false})
    @Type(() => ProjectCreateWithoutMembersInput)
    create!: ProjectCreateWithoutMembersInput;
}
