import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectCreateNestedOneWithoutSettingsInput } from '../project/project-create-nested-one-without-settings.input';

@InputType()
export class ProjectSettingsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    value?: any;

    @Field(() => ProjectCreateNestedOneWithoutSettingsInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutSettingsInput;
}
