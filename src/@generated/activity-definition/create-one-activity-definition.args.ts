import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDefinitionCreateInput } from './activity-definition-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneActivityDefinitionArgs {

    @Field(() => ActivityDefinitionCreateInput, {nullable:false})
    @Type(() => ActivityDefinitionCreateInput)
    data!: ActivityDefinitionCreateInput;
}
