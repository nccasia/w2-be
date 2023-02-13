import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Project } from '../project/project.model';
import { User } from '../user/user.model';

@ObjectType()
export class MemberOnProjects {

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => User, {nullable:false})
    user?: User;
}
