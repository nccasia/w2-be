import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutManagedteamsInput } from './user-create-without-managedteams.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutManagedteamsInput } from './user-create-or-connect-without-managedteams.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutManagedteamsInput {

    @Field(() => UserCreateWithoutManagedteamsInput, {nullable:true})
    @Type(() => UserCreateWithoutManagedteamsInput)
    create?: UserCreateWithoutManagedteamsInput;

    @Field(() => UserCreateOrConnectWithoutManagedteamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutManagedteamsInput)
    connectOrCreate?: UserCreateOrConnectWithoutManagedteamsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
