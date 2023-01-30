import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Project } from '../project/project.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class MemberOnProjects {

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}
