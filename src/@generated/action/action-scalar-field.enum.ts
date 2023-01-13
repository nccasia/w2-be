import { registerEnumType } from '@nestjs/graphql';

export enum ActionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    type = "type",
    action = "action",
    intent = "intent",
    domain = "domain",
    content = "content"
}


registerEnumType(ActionScalarFieldEnum, { name: 'ActionScalarFieldEnum', description: undefined })
