import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Organization } from '../organization/organization.model';
import { Int } from '@nestjs/graphql';
import { ResourceItem } from '../resource-item/resource-item.model';
import { ResourceCount } from './resource-count.output';

@ObjectType()
export class Resource {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => [ResourceItem], {nullable:true})
    resourceItems?: Array<ResourceItem>;

    @Field(() => ResourceCount, {nullable:false})
    _count?: ResourceCount;
}
