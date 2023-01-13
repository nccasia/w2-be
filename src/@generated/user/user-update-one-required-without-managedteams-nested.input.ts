import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutManagedteamsInput } from './user-create-without-managedteams.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutManagedteamsInput } from './user-create-or-connect-without-managedteams.input';
import { UserUpsertWithoutManagedteamsInput } from './user-upsert-without-managedteams.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutManagedteamsInput } from './user-update-without-managedteams.input';

@InputType()
export class UserUpdateOneRequiredWithoutManagedteamsNestedInput {

    @Field(() => UserCreateWithoutManagedteamsInput, {nullable:true})
    @Type(() => UserCreateWithoutManagedteamsInput)
    create?: UserCreateWithoutManagedteamsInput;

    @Field(() => UserCreateOrConnectWithoutManagedteamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutManagedteamsInput)
    connectOrCreate?: UserCreateOrConnectWithoutManagedteamsInput;

    @Field(() => UserUpsertWithoutManagedteamsInput, {nullable:true})
    @Type(() => UserUpsertWithoutManagedteamsInput)
    upsert?: UserUpsertWithoutManagedteamsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutManagedteamsInput, {nullable:true})
    @Type(() => UserUpdateWithoutManagedteamsInput)
    update?: UserUpdateWithoutManagedteamsInput;
}
