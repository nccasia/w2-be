import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateManyFormDefinetionInput } from './task-definition-create-many-form-definetion.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskDefinitionCreateManyFormDefinetionInputEnvelope {

    @Field(() => [TaskDefinitionCreateManyFormDefinetionInput], {nullable:false})
    @Type(() => TaskDefinitionCreateManyFormDefinetionInput)
    data!: Array<TaskDefinitionCreateManyFormDefinetionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
