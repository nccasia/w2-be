import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    password = "password",
    provider = "provider",
    firstname = "firstname",
    lastname = "lastname",
    googleId = "googleId",
    googleToken = "googleToken",
    avatarId = "avatarId",
    organizationId = "organizationId",
    role = "role"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
