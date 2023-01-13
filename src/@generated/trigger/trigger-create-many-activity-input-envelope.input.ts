import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerCreateManyActivityInput } from './trigger-create-many-activity.input';
import { Type } from 'class-transformer';

@InputType()
export class TriggerCreateManyActivityInputEnvelope {

    @Field(() => [TriggerCreateManyActivityInput], {nullable:false})
    @Type(() => TriggerCreateManyActivityInput)
    data!: Array<TriggerCreateManyActivityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
