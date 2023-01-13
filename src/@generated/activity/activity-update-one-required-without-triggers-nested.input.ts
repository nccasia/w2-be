import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateWithoutTriggersInput } from './activity-create-without-triggers.input';
import { Type } from 'class-transformer';
import { ActivityCreateOrConnectWithoutTriggersInput } from './activity-create-or-connect-without-triggers.input';
import { ActivityUpsertWithoutTriggersInput } from './activity-upsert-without-triggers.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { ActivityUpdateWithoutTriggersInput } from './activity-update-without-triggers.input';

@InputType()
export class ActivityUpdateOneRequiredWithoutTriggersNestedInput {

    @Field(() => ActivityCreateWithoutTriggersInput, {nullable:true})
    @Type(() => ActivityCreateWithoutTriggersInput)
    create?: ActivityCreateWithoutTriggersInput;

    @Field(() => ActivityCreateOrConnectWithoutTriggersInput, {nullable:true})
    @Type(() => ActivityCreateOrConnectWithoutTriggersInput)
    connectOrCreate?: ActivityCreateOrConnectWithoutTriggersInput;

    @Field(() => ActivityUpsertWithoutTriggersInput, {nullable:true})
    @Type(() => ActivityUpsertWithoutTriggersInput)
    upsert?: ActivityUpsertWithoutTriggersInput;

    @Field(() => ActivityWhereUniqueInput, {nullable:true})
    @Type(() => ActivityWhereUniqueInput)
    connect?: ActivityWhereUniqueInput;

    @Field(() => ActivityUpdateWithoutTriggersInput, {nullable:true})
    @Type(() => ActivityUpdateWithoutTriggersInput)
    update?: ActivityUpdateWithoutTriggersInput;
}
