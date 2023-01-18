import { registerEnumType } from '@nestjs/graphql';

export enum ActivityType {
    HTTP_ACTIVITY = "HTTP_ACTIVITY",
    GRAPHQL_ACTIVITY = "GRAPHQL_ACTIVITY",
    SCRIPT_ACTIVITY = "SCRIPT_ACTIVITY",
    SYSTEM_ACTIVITY = "SYSTEM_ACTIVITY"
}


registerEnumType(ActivityType, { name: 'ActivityType', description: undefined })
