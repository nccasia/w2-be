import { registerEnumType } from '@nestjs/graphql';

export enum ProviderEnum {
    local = "local",
    google = "google"
}


registerEnumType(ProviderEnum, { name: 'ProviderEnum', description: undefined })
