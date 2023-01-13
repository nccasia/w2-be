import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCreatedteamsInput } from './user-create-without-createdteams.input';

@InputType()
export class UserCreateOrConnectWithoutCreatedteamsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCreatedteamsInput, {nullable:false})
    @Type(() => UserCreateWithoutCreatedteamsInput)
    create!: UserCreateWithoutCreatedteamsInput;
}
