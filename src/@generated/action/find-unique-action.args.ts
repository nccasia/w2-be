import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActionWhereUniqueInput } from './action-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueActionArgs {

    @Field(() => ActionWhereUniqueInput, {nullable:false})
    @Type(() => ActionWhereUniqueInput)
    where!: ActionWhereUniqueInput;
}
