import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    password = "password",
    firstname = "firstname",
    lastname = "lastname",
    avatarId = "avatarId",
    organizationId = "organizationId",
    role = "role"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
