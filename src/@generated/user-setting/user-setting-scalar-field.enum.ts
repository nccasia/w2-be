import { registerEnumType } from '@nestjs/graphql';

export enum UserSettingScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    key = "key",
    value = "value",
    userId = "userId"
}


registerEnumType(UserSettingScalarFieldEnum, { name: 'UserSettingScalarFieldEnum', description: undefined })
