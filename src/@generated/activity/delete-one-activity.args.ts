import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneActivityArgs {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    @Type(() => ActivityWhereUniqueInput)
    where!: ActivityWhereUniqueInput;
}
