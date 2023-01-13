import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceCreateManyOrganizationInput } from './resource-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class ResourceCreateManyOrganizationInputEnvelope {

    @Field(() => [ResourceCreateManyOrganizationInput], {nullable:false})
    @Type(() => ResourceCreateManyOrganizationInput)
    data!: Array<ResourceCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
