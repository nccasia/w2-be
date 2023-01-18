import { registerEnumType } from '@nestjs/graphql';

export enum TriggerStatus {
    NEW = "NEW",
    PROCESSING = "PROCESSING",
    PROCESSED = "PROCESSED",
    FAILED = "FAILED"
}


registerEnumType(TriggerStatus, { name: 'TriggerStatus', description: undefined })
