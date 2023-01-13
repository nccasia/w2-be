import { registerEnumType } from '@nestjs/graphql';

export enum SettingsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    key = "key",
    value = "value",
    organizationId = "organizationId"
}


registerEnumType(SettingsScalarFieldEnum, { name: 'SettingsScalarFieldEnum', description: undefined })
