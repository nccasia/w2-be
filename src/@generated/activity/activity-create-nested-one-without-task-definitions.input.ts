import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateWithoutTaskDefinitionsInput } from './activity-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { ActivityCreateOrConnectWithoutTaskDefinitionsInput } from './activity-create-or-connect-without-task-definitions.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';

@InputType()
export class ActivityCreateNestedOneWithoutTaskDefinitionsInput {

    @Field(() => ActivityCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => ActivityCreateWithoutTaskDefinitionsInput)
    create?: ActivityCreateWithoutTaskDefinitionsInput;

    @Field(() => ActivityCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => ActivityCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: ActivityCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => ActivityWhereUniqueInput, {nullable:true})
    @Type(() => ActivityWhereUniqueInput)
    connect?: ActivityWhereUniqueInput;
}
