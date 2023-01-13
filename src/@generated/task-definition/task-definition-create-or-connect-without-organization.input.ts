import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutOrganizationInput } from './task-definition-create-without-organization.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutOrganizationInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutOrganizationInput)
    create!: TaskDefinitionCreateWithoutOrganizationInput;
}
