import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateWithoutWorkflowInput } from './activity-create-without-workflow.input';
import { Type } from 'class-transformer';
import { ActivityCreateOrConnectWithoutWorkflowInput } from './activity-create-or-connect-without-workflow.input';
import { ActivityUpsertWithWhereUniqueWithoutWorkflowInput } from './activity-upsert-with-where-unique-without-workflow.input';
import { ActivityCreateManyWorkflowInputEnvelope } from './activity-create-many-workflow-input-envelope.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { ActivityUpdateWithWhereUniqueWithoutWorkflowInput } from './activity-update-with-where-unique-without-workflow.input';
import { ActivityUpdateManyWithWhereWithoutWorkflowInput } from './activity-update-many-with-where-without-workflow.input';
import { ActivityScalarWhereInput } from './activity-scalar-where.input';

@InputType()
export class ActivityUpdateManyWithoutWorkflowNestedInput {

    @Field(() => [ActivityCreateWithoutWorkflowInput], {nullable:true})
    @Type(() => ActivityCreateWithoutWorkflowInput)
    create?: Array<ActivityCreateWithoutWorkflowInput>;

    @Field(() => [ActivityCreateOrConnectWithoutWorkflowInput], {nullable:true})
    @Type(() => ActivityCreateOrConnectWithoutWorkflowInput)
    connectOrCreate?: Array<ActivityCreateOrConnectWithoutWorkflowInput>;

    @Field(() => [ActivityUpsertWithWhereUniqueWithoutWorkflowInput], {nullable:true})
    @Type(() => ActivityUpsertWithWhereUniqueWithoutWorkflowInput)
    upsert?: Array<ActivityUpsertWithWhereUniqueWithoutWorkflowInput>;

    @Field(() => ActivityCreateManyWorkflowInputEnvelope, {nullable:true})
    @Type(() => ActivityCreateManyWorkflowInputEnvelope)
    createMany?: ActivityCreateManyWorkflowInputEnvelope;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    @Type(() => ActivityWhereUniqueInput)
    set?: Array<ActivityWhereUniqueInput>;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    @Type(() => ActivityWhereUniqueInput)
    disconnect?: Array<ActivityWhereUniqueInput>;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    @Type(() => ActivityWhereUniqueInput)
    delete?: Array<ActivityWhereUniqueInput>;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    @Type(() => ActivityWhereUniqueInput)
    connect?: Array<ActivityWhereUniqueInput>;

    @Field(() => [ActivityUpdateWithWhereUniqueWithoutWorkflowInput], {nullable:true})
    @Type(() => ActivityUpdateWithWhereUniqueWithoutWorkflowInput)
    update?: Array<ActivityUpdateWithWhereUniqueWithoutWorkflowInput>;

    @Field(() => [ActivityUpdateManyWithWhereWithoutWorkflowInput], {nullable:true})
    @Type(() => ActivityUpdateManyWithWhereWithoutWorkflowInput)
    updateMany?: Array<ActivityUpdateManyWithWhereWithoutWorkflowInput>;

    @Field(() => [ActivityScalarWhereInput], {nullable:true})
    @Type(() => ActivityScalarWhereInput)
    deleteMany?: Array<ActivityScalarWhereInput>;
}
