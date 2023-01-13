import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreatedteamsInput } from './user-create-without-createdteams.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCreatedteamsInput } from './user-create-or-connect-without-createdteams.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCreatedteamsInput {

    @Field(() => UserCreateWithoutCreatedteamsInput, {nullable:true})
    @Type(() => UserCreateWithoutCreatedteamsInput)
    create?: UserCreateWithoutCreatedteamsInput;

    @Field(() => UserCreateOrConnectWithoutCreatedteamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCreatedteamsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCreatedteamsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
