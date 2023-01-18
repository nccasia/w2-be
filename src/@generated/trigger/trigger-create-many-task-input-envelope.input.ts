import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerCreateManyTaskInput } from './trigger-create-many-task.input';
import { Type } from 'class-transformer';

@InputType()
export class TriggerCreateManyTaskInputEnvelope {

    @Field(() => [TriggerCreateManyTaskInput], {nullable:false})
    @Type(() => TriggerCreateManyTaskInput)
    data!: Array<TriggerCreateManyTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
