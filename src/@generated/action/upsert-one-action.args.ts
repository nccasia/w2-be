import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActionWhereUniqueInput } from './action-where-unique.input';
import { Type } from 'class-transformer';
import { ActionCreateInput } from './action-create.input';
import { ActionUpdateInput } from './action-update.input';

@ArgsType()
export class UpsertOneActionArgs {

    @Field(() => ActionWhereUniqueInput, {nullable:false})
    @Type(() => ActionWhereUniqueInput)
    where!: ActionWhereUniqueInput;

    @Field(() => ActionCreateInput, {nullable:false})
    @Type(() => ActionCreateInput)
    create!: ActionCreateInput;

    @Field(() => ActionUpdateInput, {nullable:false})
    @Type(() => ActionUpdateInput)
    update!: ActionUpdateInput;
}
