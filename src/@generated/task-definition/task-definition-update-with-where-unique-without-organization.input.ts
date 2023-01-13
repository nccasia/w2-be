import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateWithoutOrganizationInput } from './task-definition-update-without-organization.input';

@InputType()
export class TaskDefinitionUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutOrganizationInput)
    data!: TaskDefinitionUpdateWithoutOrganizationInput;
}
