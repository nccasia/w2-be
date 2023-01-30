import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsWhereInput } from './project-settings-where.input';

@InputType()
export class ProjectSettingsListRelationFilter {

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    every?: ProjectSettingsWhereInput;

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    some?: ProjectSettingsWhereInput;

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    none?: ProjectSettingsWhereInput;
}
