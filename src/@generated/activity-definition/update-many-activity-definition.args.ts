import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDefinitionUpdateManyMutationInput } from './activity-definition-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ActivityDefinitionWhereInput } from './activity-definition-where.input';

@ArgsType()
export class UpdateManyActivityDefinitionArgs {

    @Field(() => ActivityDefinitionUpdateManyMutationInput, {nullable:false})
    @Type(() => ActivityDefinitionUpdateManyMutationInput)
    data!: ActivityDefinitionUpdateManyMutationInput;

    @Field(() => ActivityDefinitionWhereInput, {nullable:true})
    @Type(() => ActivityDefinitionWhereInput)
    where?: ActivityDefinitionWhereInput;
}
