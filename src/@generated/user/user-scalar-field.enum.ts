import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    password = "password",
    firstname = "firstname",
    lastname = "lastname",
    organizationId = "organizationId",
    role = "role",
    avatarId = "avatarId",
    googleId = "googleId",
    googleToken = "googleToken",
    provider = "provider",
    fullName = "fullName",
    branchCode = "branchCode",
    jobPositionCode = "jobPositionCode",
    userTypeName = "userTypeName",
    statusName = "statusName"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
