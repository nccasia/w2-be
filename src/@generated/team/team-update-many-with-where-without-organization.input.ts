import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamScalarWhereInput } from './team-scalar-where.input';
import { Type } from 'class-transformer';
import { TeamUpdateManyMutationInput } from './team-update-many-mutation.input';

@InputType()
export class TeamUpdateManyWithWhereWithoutOrganizationInput {

    @Field(() => TeamScalarWhereInput, {nullable:false})
    @Type(() => TeamScalarWhereInput)
    where!: TeamScalarWhereInput;

    @Field(() => TeamUpdateManyMutationInput, {nullable:false})
    @Type(() => TeamUpdateManyMutationInput)
    data!: TeamUpdateManyMutationInput;
}
