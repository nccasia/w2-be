import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityUpdateManyMutationInput } from './activity-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ActivityWhereInput } from './activity-where.input';

@ArgsType()
export class UpdateManyActivityArgs {

    @Field(() => ActivityUpdateManyMutationInput, {nullable:false})
    @Type(() => ActivityUpdateManyMutationInput)
    data!: ActivityUpdateManyMutationInput;

    @Field(() => ActivityWhereInput, {nullable:true})
    @Type(() => ActivityWhereInput)
    where?: ActivityWhereInput;
}
