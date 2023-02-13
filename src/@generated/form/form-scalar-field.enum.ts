import { registerEnumType } from '@nestjs/graphql';

export enum FormScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    description = "description",
    schema = "schema",
    config = "config",
    validationConfig = "validationConfig",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    values = "values"
}


registerEnumType(FormScalarFieldEnum, { name: 'FormScalarFieldEnum', description: undefined })
