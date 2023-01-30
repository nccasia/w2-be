import { registerEnumType } from '@nestjs/graphql';

export enum Visibility {
    Public = "Public",
    Private = "Private"
}


registerEnumType(Visibility, { name: 'Visibility', description: undefined })
