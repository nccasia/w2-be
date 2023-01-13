import { registerEnumType } from '@nestjs/graphql';

export enum TriggerType {
    FORM_TRIGGER = "FORM_TRIGGER",
    SYSTEM_TRIGGER = "SYSTEM_TRIGGER",
    WORKFLOW_TRIGGER = "WORKFLOW_TRIGGER",
    APP_TRIGGER = "APP_TRIGGER"
}


registerEnumType(TriggerType, { name: 'TriggerType', description: undefined })
