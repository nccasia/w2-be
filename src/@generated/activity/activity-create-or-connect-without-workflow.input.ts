import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityCreateWithoutWorkflowInput } from './activity-create-without-workflow.input';

@InputType()
export class ActivityCreateOrConnectWithoutWorkflowInput {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    @Type(() => ActivityWhereUniqueInput)
    where!: ActivityWhereUniqueInput;

    @Field(() => ActivityCreateWithoutWorkflowInput, {nullable:false})
    @Type(() => ActivityCreateWithoutWorkflowInput)
    create!: ActivityCreateWithoutWorkflowInput;
}
