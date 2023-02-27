import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskDefinitionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    icon?: true;

    @Field(() => Boolean, {nullable:true})
    thumbnail?: true;

    @Field(() => Boolean, {nullable:true})
    descriptionTemplate?: true;

    @Field(() => Boolean, {nullable:true})
    titleTemplate?: true;

    @Field(() => Boolean, {nullable:true})
    statusTemplate?: true;

    @Field(() => Boolean, {nullable:true})
    stateTemplate?: true;

    @Field(() => Boolean, {nullable:true})
    notificationTemplate?: true;

    @Field(() => Boolean, {nullable:true})
    ctaTemplate?: true;

    @Field(() => Boolean, {nullable:true})
    organizationId?: true;

    @Field(() => Boolean, {nullable:true})
    parentId?: true;

    @Field(() => Boolean, {nullable:true})
    keyTemplate?: true;

    @Field(() => Boolean, {nullable:true})
    machineConfig?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
