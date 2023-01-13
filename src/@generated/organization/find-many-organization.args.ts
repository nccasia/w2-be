import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrganizationWhereInput } from './organization-where.input';
import { Type } from 'class-transformer';
import { OrganizationOrderByWithRelationInput } from './organization-order-by-with-relation.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrganizationScalarFieldEnum } from './organization-scalar-field.enum';

@ArgsType()
export class FindManyOrganizationArgs {

    @Field(() => OrganizationWhereInput, {nullable:true})
    @Type(() => OrganizationWhereInput)
    where?: OrganizationWhereInput;

    @Field(() => [OrganizationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrganizationOrderByWithRelationInput>;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    cursor?: OrganizationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrganizationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrganizationScalarFieldEnum>;
}
