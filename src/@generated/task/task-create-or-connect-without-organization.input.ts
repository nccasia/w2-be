import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutOrganizationInput } from './task-create-without-organization.input';

@InputType()
export class TaskCreateOrConnectWithoutOrganizationInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => TaskCreateWithoutOrganizationInput)
    create!: TaskCreateWithoutOrganizationInput;
}
