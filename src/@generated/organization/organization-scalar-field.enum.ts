import { registerEnumType } from '@nestjs/graphql';

export enum OrganizationScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrganizationScalarFieldEnum, { name: 'OrganizationScalarFieldEnum', description: undefined })
