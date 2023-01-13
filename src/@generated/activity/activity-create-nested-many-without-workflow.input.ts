import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateWithoutWorkflowInput } from './activity-create-without-workflow.input';
import { Type } from 'class-transformer';
import { ActivityCreateOrConnectWithoutWorkflowInput } from './activity-create-or-connect-without-workflow.input';
import { ActivityCreateManyWorkflowInputEnvelope } from './activity-create-many-workflow-input-envelope.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';

@InputType()
export class ActivityCreateNestedManyWithoutWorkflowInput {

    @Field(() => [ActivityCreateWithoutWorkflowInput], {nullable:true})
    @Type(() => ActivityCreateWithoutWorkflowInput)
    create?: Array<ActivityCreateWithoutWorkflowInput>;

    @Field(() => [ActivityCreateOrConnectWithoutWorkflowInput], {nullable:true})
    @Type(() => ActivityCreateOrConnectWithoutWorkflowInput)
    connectOrCreate?: Array<ActivityCreateOrConnectWithoutWorkflowInput>;

    @Field(() => ActivityCreateManyWorkflowInputEnvelope, {nullable:true})
    @Type(() => ActivityCreateManyWorkflowInputEnvelope)
    createMany?: ActivityCreateManyWorkflowInputEnvelope;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    @Type(() => ActivityWhereUniqueInput)
    connect?: Array<ActivityWhereUniqueInput>;
}
