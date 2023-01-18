import { registerEnumType } from '@nestjs/graphql';

export enum TriggerType {
    FORM_TRIGGER = "FORM_TRIGGER",
    SYSTEM_TRIGGER = "SYSTEM_TRIGGER",
    MANUAL_TRIGGER = "MANUAL_TRIGGER",
    WEBHOOK_TRIGGER = "WEBHOOK_TRIGGER"
}


registerEnumType(TriggerType, { name: 'TriggerType', description: undefined })
