import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateWithoutTriggersInput } from './activity-create-without-triggers.input';
import { Type } from 'class-transformer';
import { ActivityCreateOrConnectWithoutTriggersInput } from './activity-create-or-connect-without-triggers.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';

@InputType()
export class ActivityCreateNestedOneWithoutTriggersInput {

    @Field(() => ActivityCreateWithoutTriggersInput, {nullable:true})
    @Type(() => ActivityCreateWithoutTriggersInput)
    create?: ActivityCreateWithoutTriggersInput;

    @Field(() => ActivityCreateOrConnectWithoutTriggersInput, {nullable:true})
    @Type(() => ActivityCreateOrConnectWithoutTriggersInput)
    connectOrCreate?: ActivityCreateOrConnectWithoutTriggersInput;

    @Field(() => ActivityWhereUniqueInput, {nullable:true})
    @Type(() => ActivityWhereUniqueInput)
    connect?: ActivityWhereUniqueInput;
}
