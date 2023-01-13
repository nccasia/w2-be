import { registerEnumType } from '@nestjs/graphql';

export enum FileType {
    FILE = "FILE",
    VARIANT = "VARIANT"
}


registerEnumType(FileType, { name: 'FileType', description: undefined })
