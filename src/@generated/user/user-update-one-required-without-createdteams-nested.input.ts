import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreatedteamsInput } from './user-create-without-createdteams.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCreatedteamsInput } from './user-create-or-connect-without-createdteams.input';
import { UserUpsertWithoutCreatedteamsInput } from './user-upsert-without-createdteams.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCreatedteamsInput } from './user-update-without-createdteams.input';

@InputType()
export class UserUpdateOneRequiredWithoutCreatedteamsNestedInput {

    @Field(() => UserCreateWithoutCreatedteamsInput, {nullable:true})
    @Type(() => UserCreateWithoutCreatedteamsInput)
    create?: UserCreateWithoutCreatedteamsInput;

    @Field(() => UserCreateOrConnectWithoutCreatedteamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCreatedteamsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCreatedteamsInput;

    @Field(() => UserUpsertWithoutCreatedteamsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCreatedteamsInput)
    upsert?: UserUpsertWithoutCreatedteamsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCreatedteamsInput, {nullable:true})
    @Type(() => UserUpdateWithoutCreatedteamsInput)
    update?: UserUpdateWithoutCreatedteamsInput;
}
