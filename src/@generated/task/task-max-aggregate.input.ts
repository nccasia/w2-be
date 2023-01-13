import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    dueDate?: true;

    @Field(() => Boolean, {nullable:true})
    priority?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    typeName?: true;

    @Field(() => Boolean, {nullable:true})
    cta?: true;

    @Field(() => Boolean, {nullable:true})
    ctaName?: true;

    @Field(() => Boolean, {nullable:true})
    state?: true;

    @Field(() => Boolean, {nullable:true})
    stateName?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    statusName?: true;

    @Field(() => Boolean, {nullable:true})
    stateValues?: true;

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
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    definitionId?: true;

    @Field(() => Boolean, {nullable:true})
    assigneeId?: true;

    @Field(() => Boolean, {nullable:true})
    creatorId?: true;

    @Field(() => Boolean, {nullable:true})
    parentId?: true;

    @Field(() => Boolean, {nullable:true})
    organizationId?: true;

    @Field(() => Boolean, {nullable:true})
    teamId?: true;
}
