import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyOrganizationInput } from './task-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyOrganizationInputEnvelope {

    @Field(() => [TaskCreateManyOrganizationInput], {nullable:false})
    @Type(() => TaskCreateManyOrganizationInput)
    data!: Array<TaskCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
