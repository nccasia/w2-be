import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyManagerInput } from './project-create-many-manager.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyManagerInputEnvelope {

    @Field(() => [ProjectCreateManyManagerInput], {nullable:false})
    @Type(() => ProjectCreateManyManagerInput)
    data!: Array<ProjectCreateManyManagerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
