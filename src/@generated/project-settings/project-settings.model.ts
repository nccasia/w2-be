import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Project } from '../project/project.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectSettings {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:false,defaultValue:'{}'})
    value!: any;

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => Int, {nullable:false})
    projectId!: number;
}
