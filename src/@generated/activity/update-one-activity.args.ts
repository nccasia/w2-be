import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityUpdateInput } from './activity-update.input';
import { Type } from 'class-transformer';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';

@ArgsType()
export class UpdateOneActivityArgs {

    @Field(() => ActivityUpdateInput, {nullable:false})
    @Type(() => ActivityUpdateInput)
    data!: ActivityUpdateInput;

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    @Type(() => ActivityWhereUniqueInput)
    where!: ActivityWhereUniqueInput;
}
