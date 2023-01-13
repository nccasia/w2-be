import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsCreateManyOrganizationInput } from './settings-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class SettingsCreateManyOrganizationInputEnvelope {

    @Field(() => [SettingsCreateManyOrganizationInput], {nullable:false})
    @Type(() => SettingsCreateManyOrganizationInput)
    data!: Array<SettingsCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
