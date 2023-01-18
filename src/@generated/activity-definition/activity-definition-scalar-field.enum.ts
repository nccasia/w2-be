import { registerEnumType } from '@nestjs/graphql';

export enum ActivityDefinitionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    synchronous = "synchronous",
    type = "type",
    config = "config",
    initialValue = "initialValue",
    key = "key",
    name = "name",
    description = "description"
}


registerEnumType(ActivityDefinitionScalarFieldEnum, { name: 'ActivityDefinitionScalarFieldEnum', description: undefined })
