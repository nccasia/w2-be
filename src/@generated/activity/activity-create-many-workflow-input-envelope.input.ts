import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateManyWorkflowInput } from './activity-create-many-workflow.input';
import { Type } from 'class-transformer';

@InputType()
export class ActivityCreateManyWorkflowInputEnvelope {

    @Field(() => [ActivityCreateManyWorkflowInput], {nullable:false})
    @Type(() => ActivityCreateManyWorkflowInput)
    data!: Array<ActivityCreateManyWorkflowInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
