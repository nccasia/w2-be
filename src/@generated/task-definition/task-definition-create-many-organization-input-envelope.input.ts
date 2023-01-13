import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateManyOrganizationInput } from './task-definition-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskDefinitionCreateManyOrganizationInputEnvelope {

    @Field(() => [TaskDefinitionCreateManyOrganizationInput], {nullable:false})
    @Type(() => TaskDefinitionCreateManyOrganizationInput)
    data!: Array<TaskDefinitionCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
