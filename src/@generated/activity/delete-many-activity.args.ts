import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityWhereInput } from './activity-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyActivityArgs {

    @Field(() => ActivityWhereInput, {nullable:true})
    @Type(() => ActivityWhereInput)
    where?: ActivityWhereInput;
}
