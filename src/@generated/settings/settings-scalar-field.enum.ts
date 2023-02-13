import { registerEnumType } from '@nestjs/graphql';

export enum SettingsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    key = "key",
    organizationId = "organizationId",
    value = "value"
}


registerEnumType(SettingsScalarFieldEnum, { name: 'SettingsScalarFieldEnum', description: undefined })
