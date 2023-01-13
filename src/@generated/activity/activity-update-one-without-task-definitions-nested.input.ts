import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateWithoutTaskDefinitionsInput } from './activity-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { ActivityCreateOrConnectWithoutTaskDefinitionsInput } from './activity-create-or-connect-without-task-definitions.input';
import { ActivityUpsertWithoutTaskDefinitionsInput } from './activity-upsert-without-task-definitions.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { ActivityUpdateWithoutTaskDefinitionsInput } from './activity-update-without-task-definitions.input';

@InputType()
export class ActivityUpdateOneWithoutTaskDefinitionsNestedInput {

    @Field(() => ActivityCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => ActivityCreateWithoutTaskDefinitionsInput)
    create?: ActivityCreateWithoutTaskDefinitionsInput;

    @Field(() => ActivityCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => ActivityCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: ActivityCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => ActivityUpsertWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => ActivityUpsertWithoutTaskDefinitionsInput)
    upsert?: ActivityUpsertWithoutTaskDefinitionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ActivityWhereUniqueInput, {nullable:true})
    @Type(() => ActivityWhereUniqueInput)
    connect?: ActivityWhereUniqueInput;

    @Field(() => ActivityUpdateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => ActivityUpdateWithoutTaskDefinitionsInput)
    update?: ActivityUpdateWithoutTaskDefinitionsInput;
}
