import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateManyOrganizationInput } from './team-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class TeamCreateManyOrganizationInputEnvelope {

    @Field(() => [TeamCreateManyOrganizationInput], {nullable:false})
    @Type(() => TeamCreateManyOrganizationInput)
    data!: Array<TeamCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
