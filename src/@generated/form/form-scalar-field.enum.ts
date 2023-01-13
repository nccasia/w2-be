import { registerEnumType } from '@nestjs/graphql';

export enum FormScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    description = "description",
    schema = "schema",
    config = "config",
    validationConfig = "validationConfig",
    triggerConfig = "triggerConfig",
    serializerConfig = "serializerConfig",
    displayTemplate = "displayTemplate",
    displayConfig = "displayConfig",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FormScalarFieldEnum, { name: 'FormScalarFieldEnum', description: undefined })
