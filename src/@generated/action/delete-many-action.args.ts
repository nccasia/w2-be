import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActionWhereInput } from './action-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyActionArgs {

    @Field(() => ActionWhereInput, {nullable:true})
    @Type(() => ActionWhereInput)
    where?: ActionWhereInput;
}
