import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityCreateInput } from './activity-create.input';
import { ActivityUpdateInput } from './activity-update.input';

@ArgsType()
export class UpsertOneActivityArgs {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    @Type(() => ActivityWhereUniqueInput)
    where!: ActivityWhereUniqueInput;

    @Field(() => ActivityCreateInput, {nullable:false})
    @Type(() => ActivityCreateInput)
    create!: ActivityCreateInput;

    @Field(() => ActivityUpdateInput, {nullable:false})
    @Type(() => ActivityUpdateInput)
    update!: ActivityUpdateInput;
}
