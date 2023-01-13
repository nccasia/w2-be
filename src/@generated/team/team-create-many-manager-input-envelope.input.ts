import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateManyManagerInput } from './team-create-many-manager.input';
import { Type } from 'class-transformer';

@InputType()
export class TeamCreateManyManagerInputEnvelope {

    @Field(() => [TeamCreateManyManagerInput], {nullable:false})
    @Type(() => TeamCreateManyManagerInput)
    data!: Array<TeamCreateManyManagerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
