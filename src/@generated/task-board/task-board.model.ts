import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TaskBoardType } from '../prisma/task-board-type.enum';
import { TaskBoardViewType } from '../task/task-board-view-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Visibility } from '../prisma/visibility.enum';
import { TaskBoardSettings } from '../task-board-settings/task-board-settings.model';
import { Organization } from '../organization/organization.model';
import { Int } from '@nestjs/graphql';
import { Project } from '../project/project.model';
import { TaskDefinition } from '../task-definition/task-definition.model';
import { TaskBoardCount } from './task-board-count.output';

@ObjectType()
export class TaskBoard {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => TaskBoardType, {nullable:false,defaultValue:'Organization'})
    type!: keyof typeof TaskBoardType;

    @Field(() => TaskBoardViewType, {nullable:false,defaultValue:'Todos'})
    viewType!: keyof typeof TaskBoardViewType;

    @Field(() => GraphQLJSON, {nullable:false,defaultValue:'{}'})
    viewConfig!: any;

    @Field(() => Visibility, {nullable:false,defaultValue:'Public'})
    visibility!: keyof typeof Visibility;

    @Field(() => [TaskBoardSettings], {nullable:true})
    settings?: Array<TaskBoardSettings>;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Project, {nullable:true})
    project?: Project | null;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => TaskDefinition, {nullable:false})
    taskDefinition?: TaskDefinition;

    @Field(() => Int, {nullable:false})
    taskDefinitionId!: number;

    @Field(() => TaskBoardCount, {nullable:false})
    _count?: TaskBoardCount;
}
