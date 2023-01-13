import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityCreateManyInput } from './activity-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyActivityArgs {

    @Field(() => [ActivityCreateManyInput], {nullable:false})
    @Type(() => ActivityCreateManyInput)
    data!: Array<ActivityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
