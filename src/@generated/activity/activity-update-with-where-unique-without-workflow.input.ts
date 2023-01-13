import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityUpdateWithoutWorkflowInput } from './activity-update-without-workflow.input';

@InputType()
export class ActivityUpdateWithWhereUniqueWithoutWorkflowInput {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    @Type(() => ActivityWhereUniqueInput)
    where!: ActivityWhereUniqueInput;

    @Field(() => ActivityUpdateWithoutWorkflowInput, {nullable:false})
    @Type(() => ActivityUpdateWithoutWorkflowInput)
    data!: ActivityUpdateWithoutWorkflowInput;
}
