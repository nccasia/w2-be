import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActionCreateInput } from './action-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneActionArgs {

    @Field(() => ActionCreateInput, {nullable:false})
    @Type(() => ActionCreateInput)
    data!: ActionCreateInput;
}
