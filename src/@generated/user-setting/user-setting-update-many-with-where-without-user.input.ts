import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSettingScalarWhereInput } from './user-setting-scalar-where.input';
import { Type } from 'class-transformer';
import { UserSettingUpdateManyMutationInput } from './user-setting-update-many-mutation.input';

@InputType()
export class UserSettingUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserSettingScalarWhereInput, {nullable:false})
    @Type(() => UserSettingScalarWhereInput)
    where!: UserSettingScalarWhereInput;

    @Field(() => UserSettingUpdateManyMutationInput, {nullable:false})
    @Type(() => UserSettingUpdateManyMutationInput)
    data!: UserSettingUpdateManyMutationInput;
}
