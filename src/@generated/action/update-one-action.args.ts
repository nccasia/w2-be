import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActionUpdateInput } from './action-update.input';
import { Type } from 'class-transformer';
import { ActionWhereUniqueInput } from './action-where-unique.input';

@ArgsType()
export class UpdateOneActionArgs {

    @Field(() => ActionUpdateInput, {nullable:false})
    @Type(() => ActionUpdateInput)
    data!: ActionUpdateInput;

    @Field(() => ActionWhereUniqueInput, {nullable:false})
    @Type(() => ActionWhereUniqueInput)
    where!: ActionWhereUniqueInput;
}
