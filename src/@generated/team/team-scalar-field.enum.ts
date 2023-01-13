import { registerEnumType } from '@nestjs/graphql';

export enum TeamScalarFieldEnum {
    id = "id",
    name = "name",
    bio = "bio",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    creatorId = "creatorId",
    managerId = "managerId",
    organizationId = "organizationId"
}


registerEnumType(TeamScalarFieldEnum, { name: 'TeamScalarFieldEnum', description: undefined })
