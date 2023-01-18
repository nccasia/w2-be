import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDefinitionWhereInput } from './activity-definition-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyActivityDefinitionArgs {

    @Field(() => ActivityDefinitionWhereInput, {nullable:true})
    @Type(() => ActivityDefinitionWhereInput)
    where?: ActivityDefinitionWhereInput;
}
