import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsScalarWhereInput } from './settings-scalar-where.input';
import { Type } from 'class-transformer';
import { SettingsUpdateManyMutationInput } from './settings-update-many-mutation.input';

@InputType()
export class SettingsUpdateManyWithWhereWithoutOrganizationInput {

    @Field(() => SettingsScalarWhereInput, {nullable:false})
    @Type(() => SettingsScalarWhereInput)
    where!: SettingsScalarWhereInput;

    @Field(() => SettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => SettingsUpdateManyMutationInput)
    data!: SettingsUpdateManyMutationInput;
}
