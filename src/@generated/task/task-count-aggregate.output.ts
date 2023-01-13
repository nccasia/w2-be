import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    dueDate!: number;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Int, {nullable:false})
    values!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    typeName!: number;

    @Field(() => Int, {nullable:false})
    cta!: number;

    @Field(() => Int, {nullable:false})
    ctaName!: number;

    @Field(() => Int, {nullable:false})
    state!: number;

    @Field(() => Int, {nullable:false})
    stateName!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    statusName!: number;

    @Field(() => Int, {nullable:false})
    stateValues!: number;

    @Field(() => Int, {nullable:false})
    descriptionTemplate!: number;

    @Field(() => Int, {nullable:false})
    titleTemplate!: number;

    @Field(() => Int, {nullable:false})
    statusTemplate!: number;

    @Field(() => Int, {nullable:false})
    stateTemplate!: number;

    @Field(() => Int, {nullable:false})
    notificationTemplate!: number;

    @Field(() => Int, {nullable:false})
    ctaTemplate!: number;

    @Field(() => Int, {nullable:false})
    stateConfig!: number;

    @Field(() => Int, {nullable:false})
    statusConfig!: number;

    @Field(() => Int, {nullable:false})
    notificationConfig!: number;

    @Field(() => Int, {nullable:false})
    processConfig!: number;

    @Field(() => Int, {nullable:false})
    triggerConfig!: number;

    @Field(() => Int, {nullable:false})
    ctaConfig!: number;

    @Field(() => Int, {nullable:false})
    config!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    definitionId!: number;

    @Field(() => Int, {nullable:false})
    assigneeId!: number;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:false})
    parentId!: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:false})
    teamId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
