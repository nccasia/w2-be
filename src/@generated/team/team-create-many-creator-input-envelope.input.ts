import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateManyCreatorInput } from './team-create-many-creator.input';
import { Type } from 'class-transformer';

@InputType()
export class TeamCreateManyCreatorInputEnvelope {

    @Field(() => [TeamCreateManyCreatorInput], {nullable:false})
    @Type(() => TeamCreateManyCreatorInput)
    data!: Array<TeamCreateManyCreatorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
