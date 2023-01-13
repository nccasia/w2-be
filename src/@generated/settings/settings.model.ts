import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Organization } from '../organization/organization.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Settings {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:false,defaultValue:'{}'})
    value!: any;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => Int, {nullable:false})
    organizationId!: number;
}
