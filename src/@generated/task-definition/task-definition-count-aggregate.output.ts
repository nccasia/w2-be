import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskDefinitionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    icon!: number;

    @Field(() => Int, {nullable:false})
    thumbnail!: number;

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
    organizationId!: number;

    @Field(() => Int, {nullable:false})
    parentId!: number;

    @Field(() => Int, {nullable:false})
    stateConfig!: number;

    @Field(() => Int, {nullable:false})
    formId!: number;

    @Field(() => Int, {nullable:false})
    keyTemplate!: number;

    @Field(() => Int, {nullable:false})
    machineConfig!: number;

    @Field(() => Int, {nullable:false})
    contextConfig!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
