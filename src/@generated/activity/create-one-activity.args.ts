import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityCreateInput } from './activity-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneActivityArgs {

    @Field(() => ActivityCreateInput, {nullable:false})
    @Type(() => ActivityCreateInput)
    data!: ActivityCreateInput;
}
