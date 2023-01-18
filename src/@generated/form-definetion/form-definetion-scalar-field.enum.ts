import { registerEnumType } from '@nestjs/graphql';

export enum FormDefinetionScalarFieldEnum {
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


registerEnumType(FormDefinetionScalarFieldEnum, { name: 'FormDefinetionScalarFieldEnum', description: undefined })
