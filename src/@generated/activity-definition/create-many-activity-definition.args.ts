import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDefinitionCreateManyInput } from './activity-definition-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyActivityDefinitionArgs {

    @Field(() => [ActivityDefinitionCreateManyInput], {nullable:false})
    @Type(() => ActivityDefinitionCreateManyInput)
    data!: Array<ActivityDefinitionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
