import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutOrganizationInput } from './task-update-without-organization.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => TaskUpdateWithoutOrganizationInput)
    data!: TaskUpdateWithoutOrganizationInput;
}
