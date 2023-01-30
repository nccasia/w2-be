import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsCreateManyProjectInput } from './project-settings-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectSettingsCreateManyProjectInputEnvelope {

    @Field(() => [ProjectSettingsCreateManyProjectInput], {nullable:false})
    @Type(() => ProjectSettingsCreateManyProjectInput)
    data!: Array<ProjectSettingsCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
